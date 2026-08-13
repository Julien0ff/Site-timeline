import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';
import { getCategoryById } from '../types/timeline';
import type { TimelineEvent } from '../types/timeline';
import EventCard from './EventCard';

interface VerticalTimelineProps {
  events: TimelineEvent[];
  onEventClick: (event: TimelineEvent) => void;
}

export default function VerticalTimeline({ events, onEventClick }: VerticalTimelineProps) {
  // Group events by year for display
  const eventsByYear = useMemo(() => {
    const grouped: Record<number, TimelineEvent[]> = {};
    events.forEach((e) => {
      if (!grouped[e.year]) grouped[e.year] = [];
      grouped[e.year].push(e);
    });
    // Sort years ascending, and events within years by date
    Object.values(grouped).forEach((arr) => arr.sort((a, b) => a.dateSort - b.dateSort));
    return grouped;
  }, [events]);

  const years = useMemo(
    () => Object.keys(eventsByYear).map(Number).sort((a, b) => a - b),
    [eventsByYear]
  );

  if (events.length === 0) {
    return (
      <div className="timeline-page">
        <div className="empty-state">
          <div className="empty-state-icon"><SearchX size={48} /></div>
          <h3 className="empty-state-title">Aucun événement trouvé</h3>
          <p className="empty-state-desc">
            Veuillez ajuster vos filtres ou votre recherche pour découvrir d'autres événements.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="timeline-page">
      <div className="timeline-vertical">
        {years.map((year) => (
          <div key={year} style={{ marginBottom: '64px' }}>
              <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '40px',
                position: 'sticky',
                top: '140px',
                zIndex: 10,
              }}
            >
              <div
                style={{
                  background: 'var(--bg-primary)',
                  padding: '8px 24px',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {year}
              </div>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {eventsByYear[year].map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 20, 
                      delay: Math.min(index * 0.15, 0.6) 
                    }}
                    style={{
                      display: 'flex',
                      width: '100%',
                      justifyContent: isLeft ? 'flex-start' : 'flex-end',
                      position: 'relative'
                    }}
                    className="timeline-item-wrapper"
                  >
                    {/* Circle marker on the center line */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '24px',
                        transform: 'translate(-50%, -50%)',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: getCategoryById(event.category).color,
                        border: '2px solid var(--bg-primary)',
                        zIndex: 2,
                      }}
                      className="timeline-marker"
                    />

                    {/* Connecting line to the card */}
                    <div
                      style={{
                        position: 'absolute',
                        left: isLeft ? 'calc(50% - 30px)' : '50%',
                        right: isLeft ? '50%' : 'calc(50% - 30px)',
                        top: '24px',
                        height: '1px',
                        background: 'var(--border-color)',
                        zIndex: 1,
                      }}
                      className="timeline-connector"
                    />

                    <div
                      style={{
                        width: 'calc(50% - 30px)',
                        paddingRight: isLeft ? 0 : 0,
                      }}
                      className="timeline-card-container"
                    >
                      <EventCard event={event} onClick={() => onEventClick(event)} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-item-wrapper {
            justify-content: flex-start !important;
            padding-left: 40px;
          }
          .timeline-marker {
            left: 16px !important;
          }
          .timeline-connector {
            left: 16px !important;
            right: auto !important;
            width: 24px !important;
          }
          .timeline-card-container {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
