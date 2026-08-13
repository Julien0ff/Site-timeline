import { CATEGORIES } from '../types/timeline';
import type { CategoryId } from '../types/timeline';

interface FilterBarProps {
  activeCategory: CategoryId | null;
  activeYear: number | null;
  years: number[];
  onCategoryChange: (cat: CategoryId | null) => void;
  onYearChange: (year: number | null) => void;
}

export default function FilterBar({
  activeCategory,
  activeYear,
  years,
  onCategoryChange,
  onYearChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-bar-inner">
        <button
          className={`filter-chip ${activeCategory === null ? 'active' : ''}`}
          onClick={() => onCategoryChange(null)}
        >
          Tous
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(activeCategory === cat.id ? null : cat.id)}
            style={
              activeCategory === cat.id
                ? { borderColor: cat.color, background: cat.glowColor }
                : {}
            }
          >
            {cat.label}
          </button>
        ))}

        <div className="filter-divider" />

        <div className="year-chips">
          <button
            className={`year-chip ${activeYear === null ? 'active' : ''}`}
            onClick={() => onYearChange(null)}
          >
            Toutes
          </button>
          {years.map((year) => (
            <button
              key={year}
              className={`year-chip ${activeYear === year ? 'active' : ''}`}
              onClick={() => onYearChange(activeYear === year ? null : year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
