const fs = require('fs');
let content = fs.readFileSync('extracted.txt', 'utf8');
content = content.replace(/var\(--text-primary\)/g, 'currentColor');
content = content.replace('xmlns="http://www.w3.org/2000/svg">', `xmlns="http://www.w3.org/2000/svg">
  <style>
    svg { color: #000000; }
    @media (prefers-color-scheme: dark) {
      svg { color: #ffffff; }
    }
  </style>`);
fs.writeFileSync('public/favicon.svg', content);
