import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { getCategoryById } from '../types/timeline';
import type { TimelineEvent } from '../types/timeline';
import VoteSystem from './VoteSystem';

interface EventDetailModalProps {
  event: TimelineEvent;
  onClose: () => void;
}

export default function EventDetailModal({ event, onClose }: EventDetailModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const category = getCategoryById(event.category);

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div
        className="modal-content animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={18} />
        </button>

        <div className="modal-header">
          <div
            className="modal-category-bar"
            style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
          />
          <div className="modal-date">
            <span
              className="event-card-badge"
              style={{
                background: category.glowColor,
                color: category.color,
                marginRight: 12,
              }}
            >
              {category.label}
            </span>
            {event.date}
          </div>
          <h2 className="modal-title">{event.title}</h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div className="intensity-bar" title={`Intensité : ${event.intensity}/5`}>
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`intensity-dot ${level <= event.intensity ? `active level-${event.intensity}` : ''}`}
                  style={{ width: 10, height: 10 }}
                />
              ))}
            </div>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Intensité {event.intensity}/5
            </span>
            <span className={`status-badge ${event.status}`}>
              {event.status === 'resolved' ? 'Résolu' : event.status === 'ongoing' ? 'En cours' : 'Récent'}
            </span>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-description">{event.longDescription}</p>

          <div className="modal-section">
            <VoteSystem eventId={event.id} />
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Faits clés</h4>
            <ul className="key-facts-list">
              {event.keyFacts.map((fact, i) => (
                <li key={i} className="key-fact">
                  <div
                    className="key-fact-bullet"
                    style={{ background: category.color }}
                  />
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Tags</h4>
            <div className="tags-container">
              {event.tags.map((tag) => (
                <span key={tag} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Sources vérifiées</h4>
            <div className="sources-list">
              {event.sources.map((src, i) => (
                <a
                  key={i}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link"
                >
                  <ExternalLink size={14} />
                  {src.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
