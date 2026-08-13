import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { CategoryId, TimelineEvent } from './types/timeline';
import { EVENTS } from './data/eventsData';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import VerticalTimeline from './components/VerticalTimeline';
import EventDetailModal from './components/EventDetailModal';
import SuggestModal from './components/SuggestModal';
import LandingPage from './components/LandingPage';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  const allYears = useMemo(() => {
    const years = [...new Set(EVENTS.map((e) => e.year))];
    return years.sort((a, b) => a - b);
  }, []);

  const filteredEvents = useMemo(() => {
    let result = [...EVENTS];

    if (activeCategory) {
      result = result.filter((e) => e.category === activeCategory);
    }

    if (activeYear) {
      result = result.filter((e) => e.year === activeYear);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.shortTitle.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result.sort((a, b) => a.dateSort - b.dateSort);
  }, [activeCategory, activeYear, searchQuery]);

  return (
    <AnimatePresence mode="wait">
      {!hasEntered ? (
        <LandingPage key="landing" onEnter={() => setHasEntered(true)} />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Header
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSuggestClick={() => setIsSuggestModalOpen(true)}
          />

          <FilterBar
            activeCategory={activeCategory}
            activeYear={activeYear}
            years={allYears}
            onCategoryChange={setActiveCategory}
            onYearChange={setActiveYear}
          />

          <VerticalTimeline
            events={filteredEvents}
            onEventClick={setSelectedEvent}
          />

          {selectedEvent && (
            <EventDetailModal
              event={selectedEvent}
              onClose={() => setSelectedEvent(null)}
            />
          )}

          {isSuggestModalOpen && (
            <SuggestModal onClose={() => setIsSuggestModalOpen(false)} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
