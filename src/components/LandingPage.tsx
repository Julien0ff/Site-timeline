import { motion } from 'framer-motion';
import LightningIcon from './LightningIcon';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <motion.div 
      className="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="landing-content">
        <motion.div 
          className="landing-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <LightningIcon width="80" height="80" />
        </motion.div>

        <motion.h1 
          className="landing-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          LA TIMELINE
        </motion.h1>

        <motion.p 
          className="landing-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Prêt à revivre les événements qui ont marqué les réseaux français ?
        </motion.p>

        <motion.button 
          className="landing-btn"
          onClick={onEnter}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Commencer l'exploration
        </motion.button>
      </div>
    </motion.div>
  );
}
