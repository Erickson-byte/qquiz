import React, { useState } from 'react';
import { Player, GameSettings, Question, LeaderboardEntry } from './types/game';
import { INITIAL_QUESTIONS, INITIAL_LEADERBOARD } from './data/questions';
import { Header } from './components/Header';
import { PlayerSetup } from './components/PlayerSetup';
import { ActiveQuestionCard } from './components/ActiveQuestionCard';
import { RoundTransition } from './components/RoundTransition';
import { GameOverModal } from './components/GameOverModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { CuriousFactModal } from './components/CuriousFactModal';
import { AiRoundGeneratorModal } from './components/AiRoundGeneratorModal';
import { RulesModal } from './components/RulesModal';
import { sound } from './utils/sound';
import { ThemeProvider, useTheme } from './context/ThemeContext';

type GameScreen = 'setup' | 'playing' | 'round-transition' | 'game-over';

function GameMain() {
  const { isBlush } = useTheme();
  const [screen, setScreen] = useState<GameScreen>('setup');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Modals state
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isCuriousFactsOpen, setIsCuriousFactsOpen] = useState(false);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isAiGeneratorOpen, setIsAiGeneratorOpen] = useState(false);

  // Leaderboard data with localStorage
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() => {
    try {
      const saved = localStorage.getItem('catracho_couple_leaderboard');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_LEADERBOARD;
  });

  const handleSaveToLeaderboard = (entry: LeaderboardEntry) => {
    const updated = [entry, ...leaderboard];
    setLeaderboard(updated);
    try {
      localStorage.setItem('catracho_couple_leaderboard', JSON.stringify(updated));
    } catch {}
  };

  // Players state
  const [players, setPlayers] = useState<[Player, Player]>([
    {
      id: 'p1',
      name: 'Ella ❤️',
      avatar: '👑',
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      currentStreak: 0,
      maxStreak: 0,
      totalTimeSpentSeconds: 0,
    },
    {
      id: 'p2',
      name: 'Él 💙',
      avatar: '🦁',
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      currentStreak: 0,
      maxStreak: 0,
      totalTimeSpentSeconds: 0,
    },
  ]);

  const [settings, setSettings] = useState<GameSettings>({
    roundDurationSeconds: 15,
    totalRounds: 5,
    questionsPerRound: 4,
    categories: ['honduras', 'grammar', 'math', 'general'],
    bet: '🍕 El que pierda invita las baleadas y los smoothies',
    soundEnabled: true,
    hapticEnabled: true,
  });

  // Game loop tracking
  const [gameDeck, setGameDeck] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [activePlayerTurn, setActivePlayerTurn] = useState<'p1' | 'p2'>('p1');

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
  };

  const shuffleArray = <T,>(arr: T[]): T[] => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const handleStartGame = (configuredPlayers: [Player, Player], configuredSettings: GameSettings) => {
    setPlayers(configuredPlayers);
    setSettings(configuredSettings);

    const matchingQuestions = INITIAL_QUESTIONS.filter((q) =>
      configuredSettings.categories.includes(q.category)
    );

    const neededCount = configuredSettings.totalRounds * configuredSettings.questionsPerRound;
    let pool = shuffleArray(matchingQuestions);

    while (pool.length < neededCount) {
      pool = [...pool, ...shuffleArray(matchingQuestions)];
    }

    const deck = pool.slice(0, neededCount);
    setGameDeck(deck);
    setCurrentQuestionIndex(0);
    setCurrentRound(1);
    setActivePlayerTurn('p1');
    setScreen('playing');
  };

  const handleQuestionsGenerated = (newQuestions: Question[]) => {
    if (screen === 'playing') {
      setGameDeck((prev) => [
        ...prev.slice(0, currentQuestionIndex + 1),
        ...newQuestions,
        ...prev.slice(currentQuestionIndex + 1),
      ]);
    } else {
      const updatedPlayers: [Player, Player] = [
        { ...players[0], score: 0, correctCount: 0, wrongCount: 0, currentStreak: 0, maxStreak: 0 },
        { ...players[1], score: 0, correctCount: 0, wrongCount: 0, currentStreak: 0, maxStreak: 0 },
      ];
      setGameDeck(newQuestions);
      setSettings((prev) => ({
        ...prev,
        totalRounds: Math.ceil(newQuestions.length / 4) || 2,
        questionsPerRound: 4,
      }));
      setCurrentQuestionIndex(0);
      setCurrentRound(1);
      setActivePlayerTurn('p1');
      setPlayers(updatedPlayers);
      setScreen('playing');
    }
  };

  const handleAnswer = (isCorrect: boolean, points: number, timeSpent: number) => {
    setPlayers((prev) => {
      const [p1, p2] = prev;
      if (activePlayerTurn === 'p1') {
        const nextStreak = isCorrect ? p1.currentStreak + 1 : 0;
        return [
          {
            ...p1,
            score: p1.score + points,
            correctCount: p1.correctCount + (isCorrect ? 1 : 0),
            wrongCount: p1.wrongCount + (isCorrect ? 0 : 1),
            currentStreak: nextStreak,
            maxStreak: Math.max(p1.maxStreak, nextStreak),
            totalTimeSpentSeconds: p1.totalTimeSpentSeconds + timeSpent,
          },
          p2,
        ];
      } else {
        const nextStreak = isCorrect ? p2.currentStreak + 1 : 0;
        return [
          p1,
          {
            ...p2,
            score: p2.score + points,
            correctCount: p2.correctCount + (isCorrect ? 1 : 0),
            wrongCount: p2.wrongCount + (isCorrect ? 0 : 1),
            currentStreak: nextStreak,
            maxStreak: Math.max(p2.maxStreak, nextStreak),
            totalTimeSpentSeconds: p2.totalTimeSpentSeconds + timeSpent,
          },
        ];
      }
    });
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    const questionsPerRound = settings.questionsPerRound;

    if (nextIndex >= gameDeck.length) {
      setScreen('game-over');
      return;
    }

    if (nextIndex % questionsPerRound === 0) {
      setScreen('round-transition');
      return;
    }

    setCurrentQuestionIndex(nextIndex);
    setActivePlayerTurn((prev) => (prev === 'p1' ? 'p2' : 'p1'));
  };

  const handleStartNextRound = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setCurrentRound((prev) => prev + 1);
    setActivePlayerTurn((prev) => (prev === 'p1' ? 'p2' : 'p1'));
    setScreen('playing');
  };

  const handlePlayAgain = () => {
    handleStartGame(
      [
        { ...players[0], score: 0, correctCount: 0, wrongCount: 0, currentStreak: 0, maxStreak: 0 },
        { ...players[1], score: 0, correctCount: 0, wrongCount: 0, currentStreak: 0, maxStreak: 0 },
      ],
      settings
    );
  };

  const handleResetToSetup = () => {
    setScreen('setup');
  };

  const getRoundMultiplier = (r: number) => {
    if (r >= 5) return 2.0;
    if (r >= 3) return 1.5;
    return 1.0;
  };

  const currentQuestion = gameDeck[currentQuestionIndex] || INITIAL_QUESTIONS[0];
  const questionNumberInRound = (currentQuestionIndex % settings.questionsPerRound) + 1;
  const activePlayer = activePlayerTurn === 'p1' ? players[0] : players[1];
  const otherPlayer = activePlayerTurn === 'p1' ? players[1] : players[0];
  const nextRoundCategory =
    gameDeck[currentQuestionIndex + 1]?.category || settings.categories[0] || 'honduras';

  return (
    <div
      className={`min-h-screen relative flex flex-col font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-500 overflow-x-hidden ${
        isBlush
          ? 'bg-gradient-to-b from-[#fff6f6] via-[#fef2f2] to-[#fcf7f5] text-slate-800'
          : 'bg-gradient-to-b from-[#160f1b] via-[#1c1322] to-[#120b17] text-rose-50'
      }`}
    >
      {/* Delicate floating ambient color orbs for an aesthetic, romantic atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute -top-24 -left-20 w-72 h-72 rounded-full blur-3xl transition-opacity duration-700 animate-soft-float ${
            isBlush ? 'bg-rose-200/40 opacity-70' : 'bg-rose-900/20 opacity-40'
          }`}
        />
        <div
          className={`absolute top-1/3 -right-24 w-80 h-80 rounded-full blur-3xl transition-opacity duration-700 animate-soft-float delay-1000 ${
            isBlush ? 'bg-amber-100/50 opacity-60' : 'bg-purple-900/20 opacity-30'
          }`}
        />
        <div
          className={`absolute -bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl transition-opacity duration-700 animate-soft-float delay-700 ${
            isBlush ? 'bg-pink-100/50 opacity-70' : 'bg-pink-950/20 opacity-30'
          }`}
        />
      </div>

      {/* Mobile Top Navigation */}
      <Header
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        onOpenCuriousFacts={() => setIsCuriousFactsOpen(true)}
        onOpenRules={() => setIsRulesOpen(true)}
        onResetGame={handleResetToSetup}
        inGame={screen === 'playing' || screen === 'round-transition'}
      />

      {/* Main Game Screen Router */}
      <main className="flex-1 flex flex-col justify-center pb-8 z-10">
        {screen === 'setup' && (
          <PlayerSetup
            onStartGame={handleStartGame}
            onOpenAiGenerator={() => setIsAiGeneratorOpen(true)}
          />
        )}

        {screen === 'playing' && currentQuestion && (
          <ActiveQuestionCard
            key={`${currentQuestion.id}-${activePlayerTurn}-${currentQuestionIndex}`}
            question={currentQuestion}
            activePlayer={activePlayer}
            otherPlayer={otherPlayer}
            roundNumber={currentRound}
            totalRounds={settings.totalRounds}
            questionNumberInRound={questionNumberInRound}
            totalQuestionsInRound={settings.questionsPerRound}
            roundMultiplier={getRoundMultiplier(currentRound)}
            timeLimitSeconds={settings.roundDurationSeconds}
            bet={settings.bet}
            onAnswer={handleAnswer}
            onNextQuestion={handleNextQuestion}
          />
        )}

        {screen === 'round-transition' && (
          <RoundTransition
            completedRound={currentRound}
            totalRounds={settings.totalRounds}
            nextCategory={nextRoundCategory}
            nextMultiplier={getRoundMultiplier(currentRound + 1)}
            players={players}
            bet={settings.bet}
            onStartNextRound={handleStartNextRound}
          />
        )}

        {screen === 'game-over' && (
          <GameOverModal
            players={players}
            totalRounds={settings.totalRounds}
            bet={settings.bet}
            onPlayAgain={handlePlayAgain}
            onSaveToLeaderboard={handleSaveToLeaderboard}
            onViewLeaderboard={() => setIsLeaderboardOpen(true)}
          />
        )}
      </main>

      {/* Modals */}
      <LeaderboardModal
        entries={leaderboard}
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />

      <CuriousFactModal
        isOpen={isCuriousFactsOpen}
        onClose={() => setIsCuriousFactsOpen(false)}
      />

      <RulesModal
        isOpen={isRulesOpen}
        onClose={() => setIsRulesOpen(false)}
      />

      <AiRoundGeneratorModal
        isOpen={isAiGeneratorOpen}
        onClose={() => setIsAiGeneratorOpen(false)}
        onQuestionsGenerated={handleQuestionsGenerated}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <GameMain />
    </ThemeProvider>
  );
}
