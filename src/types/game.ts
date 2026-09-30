export type QuestionCategory = 'honduras' | 'grammar' | 'math' | 'general';

export interface Question {
  id: string;
  category: QuestionCategory;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  curiousFact: string;
  difficulty?: 'facil' | 'medio' | 'dificil';
}

export interface Player {
  id: 'p1' | 'p2';
  name: string;
  avatar: string;
  score: number;
  correctCount: number;
  wrongCount: number;
  currentStreak: number;
  maxStreak: number;
  totalTimeSpentSeconds: number;
}

export interface GameSettings {
  roundDurationSeconds: number;
  totalRounds: number;
  questionsPerRound: number;
  categories: QuestionCategory[];
  bet: string;
  soundEnabled: boolean;
  hapticEnabled: boolean;
}

export interface LeaderboardEntry {
  id: string;
  coupleName: string;
  player1Name: string;
  player2Name: string;
  winnerName: string;
  totalScore: number;
  roundsPlayed: number;
  accuracy: number;
  date: string;
  location: string;
  rankBadge: string;
  isCustom?: boolean;
}

export interface RoundInfo {
  roundNumber: number;
  category: QuestionCategory;
  title: string;
  description: string;
  multiplier: number;
}
