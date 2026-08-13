import { useState, useEffect } from 'react';
import type { Vote } from '../types/timeline';

interface VoteSystemProps {
  eventId: string;
}

function getVotes(): Record<string, Vote> {
  try {
    const raw = localStorage.getItem('chrono-votes');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveVotes(votes: Record<string, Vote>) {
  localStorage.setItem('chrono-votes', JSON.stringify(votes));
}

function getUserVotes(): Record<string, 'fire' | 'ice'> {
  try {
    const raw = localStorage.getItem('chrono-user-votes');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveUserVotes(uv: Record<string, 'fire' | 'ice'>) {
  localStorage.setItem('chrono-user-votes', JSON.stringify(uv));
}

export default function VoteSystem({ eventId }: VoteSystemProps) {
  const [vote, setVote] = useState<Vote>({ eventId, pressure: 50, totalVotes: 0 });
  const [userVote, setUserVote] = useState<'fire' | 'ice' | null>(null);

  useEffect(() => {
    const allVotes = getVotes();
    if (allVotes[eventId]) {
      setVote(allVotes[eventId]);
    }
    const uv = getUserVotes();
    if (uv[eventId]) {
      setUserVote(uv[eventId]);
    }
  }, [eventId]);

  const handleVote = (type: 'fire' | 'ice') => {
    const allVotes = getVotes();
    const uv = getUserVotes();

    // If same vote, undo
    if (userVote === type) {
      const current = allVotes[eventId] || { eventId, pressure: 50, totalVotes: 0 };
      const delta = type === 'fire' ? -5 : 5;
      const newPressure = Math.max(0, Math.min(100, current.pressure + delta));
      const newVote = { ...current, pressure: newPressure, totalVotes: Math.max(0, current.totalVotes - 1) };
      allVotes[eventId] = newVote;
      delete uv[eventId];
      saveVotes(allVotes);
      saveUserVotes(uv);
      setVote(newVote);
      setUserVote(null);
      return;
    }

    const current = allVotes[eventId] || { eventId, pressure: 50, totalVotes: 0 };
    let delta = type === 'fire' ? 5 : -5;
    // If switching vote, double effect
    if (userVote && userVote !== type) {
      delta = type === 'fire' ? 10 : -10;
    }
    const newPressure = Math.max(0, Math.min(100, current.pressure + delta));
    const newTotal = userVote ? current.totalVotes : current.totalVotes + 1;
    const newVote = { ...current, pressure: newPressure, totalVotes: newTotal };

    allVotes[eventId] = newVote;
    uv[eventId] = type;
    saveVotes(allVotes);
    saveUserVotes(uv);
    setVote(newVote);
    setUserVote(type);
  };

  return (
    <div className="vote-system">
      <span className="vote-label">Pression communautaire</span>
      <div className="vote-buttons">
        <button
          className={`vote-btn ice ${userVote === 'ice' ? 'voted' : ''}`}
          onClick={() => handleVote('ice')}
          title="Réduire la pression"
        >
          ❄️
        </button>
      </div>
      <div className="vote-gauge">
        <div
          className="vote-gauge-fill"
          style={{ width: `${vote.pressure}%` }}
        />
      </div>
      <div className="vote-buttons">
        <button
          className={`vote-btn fire ${userVote === 'fire' ? 'voted' : ''}`}
          onClick={() => handleVote('fire')}
          title="Augmenter la pression"
        >
          🔥
        </button>
      </div>
      <span className="vote-count">{vote.totalVotes} votes</span>
    </div>
  );
}
