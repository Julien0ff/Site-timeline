const fs = require('fs');

const svgContent = fs.readFileSync('public/426371650_95d7f938-66d8-4967-9b2d-698886eab505.svg', 'utf-8');

// The 6th bolt is in the bounding box approx:
// X: 100 to 230
// Y: 250 to 470

const isInside = (x, y) => x >= 90 && x <= 230 && y >= 250 && y <= 470;

let outputRects = [];
let outputPolygons = [];

// Very hacky regex parsing for quick extraction
const rectRegex = /<rect[^>]+x="([^"]+)"[^>]+y="([^"]+)"[^>]+width="([^"]+)"[^>]+height="([^"]+)"(?:[^>]+style="fill: ([^;]+);"[^>]*)?[^>]*\/>/g;
const rectTransformRegex = /<rect[^>]+x="([^"]+)"[^>]+y="([^"]+)"[^>]+width="([^"]+)"[^>]+height="([^"]+)"[^>]+transform="translate\(([^ ]+) ([^)]+)\) rotate\(([^)]+)\)"(?:[^>]+style="fill: ([^;]+);"[^>]*)?[^>]*\/>/g;
const polygonRegex = /<polygon[^>]+points="([^"]+)"[^>]+style="fill: ([^;]+);"[^>]*\/>/g;

let match;

// Normal rects
while ((match = rectRegex.exec(svgContent)) !== null) {
  if (match[0].includes('transform')) continue; // handled by other regex
  
  const x = parseFloat(match[1]);
  const y = parseFloat(match[2]);
  const w = parseFloat(match[3]);
  const h = parseFloat(match[4]);
  const fill = match[5] || '#000000'; // Default black if no style
  
  if (isInside(x, y)) {
    outputRects.push({ x, y, w, h, fill });
  }
}

// Transformed rects
while ((match = rectTransformRegex.exec(svgContent)) !== null) {
  // SVG transforms are complex, let's just parse the basic ones used here
  // For this specific SVG, the transformed rects are usually particles or rotated highlights.
  // Actually, wait, let's see what the transform does.
  // `transform="translate(437.955 533.278) rotate(180)"`
  // If we rotate 180 around 0,0, then x,y becomes -x, -y. Then translate.
  // Final X = tx - x - w
  // Final Y = ty - y - h
  
  const originalX = parseFloat(match[1]);
  const originalY = parseFloat(match[2]);
  const w = parseFloat(match[3]);
  const h = parseFloat(match[4]);
  const tx = parseFloat(match[5]);
  const ty = parseFloat(match[6]);
  const rot = parseFloat(match[7]);
  const fill = match[8] || '#000000';
  
  let finalX = originalX;
  let finalY = originalY;
  
  if (rot === 180) {
    finalX = tx - originalX - w;
    finalY = ty - originalY - h;
  } else if (rot === 90) {
    // x' = -y, y' = x
    finalX = tx - originalY - h;
    finalY = ty + originalX;
  }
  
  if (isInside(finalX, finalY)) {
    outputRects.push({ x: finalX, y: finalY, w, h, fill });
  }
}

// Polygons
while ((match = polygonRegex.exec(svgContent)) !== null) {
  const points = match[1];
  const fill = match[2];
  
  // check first point
  const firstPoint = points.split(' ')[0];
  const firstX = parseFloat(firstPoint);
  const firstY = parseFloat(points.split(' ')[1]);
  
  if (isInside(firstX, firstY)) {
    outputPolygons.push({ points, fill });
  }
}

// Normalize coordinates
let minX = Infinity;
let minY = Infinity;
let maxX = -Infinity;
let maxY = -Infinity;

[...outputRects, ...outputPolygons.flatMap(p => {
  const pts = p.points.split(' ');
  const coords = [];
  for(let i=0; i<pts.length; i+=2) coords.push({x: parseFloat(pts[i]), y: parseFloat(pts[i+1])});
  return coords;
})].forEach(item => {
  if (item.x !== undefined) {
    minX = Math.min(minX, item.x);
    minY = Math.min(minY, item.y);
    maxX = Math.max(maxX, item.x + (item.w || 0));
    maxY = Math.max(maxY, item.y + (item.h || 0));
  }
});

let reactSvg = `<svg viewBox="0 0 ${maxX - minX} ${maxY - minY}" width="40" height="40" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">\n`;

outputPolygons.forEach(p => {
  const pts = p.points.split(' ');
  const newPts = [];
  for(let i=0; i<pts.length; i+=2) {
    newPts.push(`${parseFloat(pts[i]) - minX} ${parseFloat(pts[i+1]) - minY}`);
  }
  const color = p.fill === '#ff9906' ? 'var(--text-primary)" opacity="0.4' : 'var(--text-primary)';
  reactSvg += `  <polygon points="${newPts.join(' ')}" fill="${color}" />\n`;
});

outputRects.forEach(r => {
  const color = r.fill === '#ff9906' ? 'var(--text-primary)" opacity="0.4' : 'var(--text-primary)';
  reactSvg += `  <rect x="${r.x - minX}" y="${r.y - minY}" width="${r.w}" height="${r.h}" fill="${color}" />\n`;
});

reactSvg += `</svg>`;

fs.writeFileSync('extracted.txt', reactSvg);
console.log('Done! Wrote to extracted.txt');
