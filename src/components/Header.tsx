import { Search, Plus, Filter } from 'lucide-react';
import LightningIcon from './LightningIcon';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSuggestClick: () => void;
}

export default function Header({ searchQuery, onSearchChange, onSuggestClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <div className="header-logo-icon">
            <LightningIcon width="40" height="40" />
          </div>
          <div>
            <h1>LA TIMELINE</h1>
            <span>Les événements qui ont marqué les réseaux</span>
          </div>
        </div>
        <div className="header-actions">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Rechercher un événement..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={onSuggestClick}>
            <Plus size={16} />
            <span className="btn-text">Suggérer</span>
          </button>
        </div>
      </div>
    </header>
  );
}
