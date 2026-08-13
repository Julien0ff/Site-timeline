export type CategoryId =
  | 'gaming'
  | 'corporate'
  | 'social-media'
  | 'judicial'
  | 'disaster'
  | 'social-movement'
  | 'cultural';

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  color: string;
  glowColor: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  shortTitle: string;
  date: string; // ISO date string or descriptive
  dateSort: number; // timestamp for sorting
  year: number;
  month?: number;
  category: CategoryId;
  description: string;
  longDescription: string;
  intensity: 1 | 2 | 3 | 4 | 5;
  status: 'resolved' | 'ongoing' | 'recent';
  sources: SourceLink[];
  tags: string[];
  keyFacts: string[];
}

export interface Vote {
  eventId: string;
  pressure: number; // aggregate community pressure score
  totalVotes: number;
}

export interface SuggestionForm {
  title: string;
  date: string;
  category: CategoryId;
  description: string;
  sources: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'gaming',
    label: 'Gaming & YouTube',
    emoji: '🎮',
    color: '#344054', // Dark Slate
    glowColor: '#F2F4F7', // Soft background
  },
  {
    id: 'corporate',
    label: 'Entreprises & Marques',
    emoji: '🏢',
    color: '#875C46', // Terracotta
    glowColor: '#F5EBE6',
  },
  {
    id: 'social-media',
    label: 'Lois & Réseaux',
    emoji: '📱',
    color: '#32577A', // Muted Blue
    glowColor: '#E9EEF2',
  },
  {
    id: 'judicial',
    label: 'Judiciaire',
    emoji: '⚖️',
    color: '#7F675B', // Warm Taupe
    glowColor: '#F3EFE9',
  },
  {
    id: 'disaster',
    label: 'Catastrophes',
    emoji: '🔥',
    color: '#B04C3D', // Brick Red
    glowColor: '#F8EAE7',
  },
  {
    id: 'social-movement',
    label: 'Mouvements sociaux',
    emoji: '✊',
    color: '#4B6A50', // Sage Green
    glowColor: '#EAF0EB',
  },
  {
    id: 'cultural',
    label: 'Culture web',
    emoji: '🌐',
    color: '#654B6B', // Muted Plum
    glowColor: '#EFEAF0',
  },
];

export function getCategoryById(id: CategoryId): Category {
  return CATEGORIES.find((c) => c.id === id)!;
}
