import { getCategoryById } from '../types/timeline';
import type { TimelineEvent } from '../types/timeline';

interface EventCardProps {
  event: TimelineEvent;
  onClick: () => void;
  style?: React.CSSProperties;
}

export default function EventCard({ event, onClick, style }: EventCardProps) {
  const category = getCategoryById(event.category);

  return (
    <div
      className="event-card"
      data-category={event.category}
      onClick={onClick}
      style={style}
    >
      <div className="event-card-header">
        <span
          className="event-card-badge"
          style={{ background: category.glowColor, color: category.color }}
        >
          {category.label}
        </span>
        <span className="event-card-date">{event.date}</span>
      </div>

      <h3 className="event-card-title">{event.shortTitle}</h3>

      <p className="event-card-description">{event.description}</p>

      <div className="event-card-footer">
        <div className="intensity-bar" title={`Intensité : ${event.intensity}/5`}>
          {[1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              className={`intensity-dot ${level <= event.intensity ? `active level-${event.intensity}` : ''}`}
            />
          ))}
        </div>
        <span className={`status-badge ${event.status}`}>
          {event.status === 'resolved' ? 'Résolu' : event.status === 'ongoing' ? 'En cours' : 'Récent'}
        </span>
      </div>
    </div>
  );
}
