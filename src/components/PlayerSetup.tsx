import React, { useState } from 'react';
import { Player, GameSettings, QuestionCategory } from '../types/game';
import { CATEGORY_LABELS, DEFAULT_COUPLE_BETS } from '../data/questions';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';
import { Heart, Sparkles, Clock, Layers, Gift, Bot, Star } from 'lucide-react';

interface PlayerSetupProps {
  onStartGame: (players: [Player, Player], settings: GameSettings) => void;
  onOpenAiGenerator: () => void;
}

const AVATAR_OPTIONS = ['👑', '🌸', '🦁', '🦉', '🦊', '⚡', '🎩', '🚀', '🐅', '🧠', '🐺', '🌟'];

export const PlayerSetup: React.FC<PlayerSetupProps> = ({ onStartGame, onOpenAiGenerator }) => {
  const { isBlush } = useTheme();

  const [p1Name, setP1Name] = useState('Ella ❤️');
  const [p1Avatar, setP1Avatar] = useState('👑');

  const [p2Name, setP2Name] = useState('Él 💙');
  const [p2Avatar, setP2Avatar] = useState('🦁');

  const [selectedBet, setSelectedBet] = useState(DEFAULT_COUPLE_BETS[0]);
  const [customBet, setCustomBet] = useState('');
  const [isCustomBet, setIsCustomBet] = useState(false);

  const [timeSeconds, setTimeSeconds] = useState(15);
  const [roundsCount, setRoundsCount] = useState(5);
  const [selectedCategories, setSelectedCategories] = useState<QuestionCategory[]>([
    'honduras',
    'grammar',
    'math',
    'general',
  ]);

  const toggleCategory = (cat: QuestionCategory) => {
    sound.playTap();
    if (selectedCategories.includes(cat)) {
      if (selectedCategories.length === 1) return;
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const handleStart = () => {
    sound.playCorrect();
    const finalBet = isCustomBet && customBet.trim() ? customBet.trim() : selectedBet;

    const player1: Player = {
      id: 'p1',
      name: p1Name.trim() || 'Jugador 1',
      avatar: p1Avatar,
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      currentStreak: 0,
      maxStreak: 0,
      totalTimeSpentSeconds: 0,
    };

    const player2: Player = {
      id: 'p2',
      name: p2Name.trim() || 'Jugador 2',
      avatar: p2Avatar,
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      currentStreak: 0,
      maxStreak: 0,
      totalTimeSpentSeconds: 0,
    };

    const settings: GameSettings = {
      roundDurationSeconds: timeSeconds,
      totalRounds: roundsCount,
      questionsPerRound: 4,
      categories: selectedCategories,
      bet: finalBet,
      soundEnabled: sound.enabled,
      hapticEnabled: true,
    };

    onStartGame([player1, player2], settings);
  };

  // Card theme helper classes
  const cardBg = isBlush
    ? 'bg-white/80 border-rose-100/90 shadow-[0_8px_30px_rgb(244,63,94,0.06)]'
    : 'bg-[#22172b]/85 border-[#3d274b]/80 shadow-[0_8px_30px_rgb(0,0,0,0.35)]';

  const subCardP1 = isBlush
    ? 'bg-rose-50/70 border-rose-200/60'
    : 'bg-[#2d1b37]/60 border-rose-500/20';

  const subCardP2 = isBlush
    ? 'bg-sky-50/70 border-sky-200/60'
    : 'bg-[#1c2238]/60 border-sky-500/20';

  const textPrimary = isBlush ? 'text-slate-800' : 'text-rose-50';
  const textMuted = isBlush ? 'text-slate-500' : 'text-rose-200/70';

  return (
    <div className="max-w-md mx-auto px-4 py-5 space-y-5 animate-in fade-in duration-300">
      {/* Soft Romantic Header */}
      <div className="text-center space-y-2 relative">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-gradient-to-r from-rose-400/10 via-pink-400/10 to-amber-400/10 border border-rose-300/30 text-rose-500 shadow-sm">
          <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400 animate-pulse" />
          <span>Trivia de Amor &amp; Curiosidades</span>
          <Sparkles className="w-3 h-3 text-amber-400" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-['Outfit']">
          <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
            ¿Quién sabe más hoy?
          </span>
        </h2>

        <p className={`text-xs ${textMuted} max-w-xs mx-auto leading-relaxed`}>
          Pásense el móvil por rondas: historia de Honduras, palabras hermosas, acertijos rápidos y cultura general.
        </p>
      </div>

      {/* Players Setup Card */}
      <div className={`backdrop-blur-xl border rounded-3xl p-4.5 space-y-4 ${cardBg}`}>
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider pb-1">
          <span className={isBlush ? 'text-slate-600' : 'text-rose-200'}>Personalicen sus Perfiles</span>
          <span className="text-rose-400 flex items-center gap-1 text-[11px] font-semibold lowercase">
            <Heart className="w-3 h-3 fill-rose-400" /> 1 móvil para los dos
          </span>
        </div>

        {/* Player 1 (Ella / Pareja 1) */}
        <div className={`space-y-2 p-3.5 rounded-2xl border transition-all ${subCardP1}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-500 flex items-center gap-1">
              <span>Jugador 1</span>
            </span>
            <div className="flex gap-1 overflow-x-auto max-w-[170px] py-0.5 no-scrollbar">
              {AVATAR_OPTIONS.slice(0, 6).map((av) => (
                <button
                  key={av}
                  type="button"
                  onClick={() => {
                    sound.playTap();
                    setP1Avatar(av);
                  }}
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-sm transition-transform cursor-pointer ${
                    p1Avatar === av
                      ? 'bg-rose-400/30 border border-rose-400 scale-110 shadow-sm'
                      : 'hover:bg-rose-100/50'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-2xl w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-white/80 border border-rose-200 shadow-sm">
              {p1Avatar}
            </span>
            <input
              type="text"
              value={p1Name}
              onChange={(e) => setP1Name(e.target.value)}
              placeholder="Nombre de ella..."
              maxLength={20}
              className={`w-full rounded-2xl px-3.5 py-2 text-xs sm:text-sm font-medium border focus:outline-none transition-all ${
                isBlush
                  ? 'bg-white/90 border-rose-200 text-slate-800 placeholder-slate-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-200'
                  : 'bg-[#1e1326] border-[#442c55] text-rose-100 placeholder-rose-300/40 focus:border-rose-400'
              }`}
            />
          </div>
        </div>

        {/* Player 2 (Él / Pareja 2) */}
        <div className={`space-y-2 p-3.5 rounded-2xl border transition-all ${subCardP2}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-sky-500 flex items-center gap-1">
              <span>Jugador 2</span>
            </span>
            <div className="flex gap-1 overflow-x-auto max-w-[170px] py-0.5 no-scrollbar">
              {AVATAR_OPTIONS.slice(6, 12).map((av) => (
                <button
                  key={av}
                  type="button"
                  onClick={() => {
                    sound.playTap();
                    setP2Avatar(av);
                  }}
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-sm transition-transform cursor-pointer ${
                    p2Avatar === av
                      ? 'bg-sky-400/30 border border-sky-400 scale-110 shadow-sm'
                      : 'hover:bg-sky-100/50'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-2xl w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-white/80 border border-sky-200 shadow-sm">
              {p2Avatar}
            </span>
            <input
              type="text"
              value={p2Name}
              onChange={(e) => setP2Name(e.target.value)}
              placeholder="Nombre de él..."
              maxLength={20}
              className={`w-full rounded-2xl px-3.5 py-2 text-xs sm:text-sm font-medium border focus:outline-none transition-all ${
                isBlush
                  ? 'bg-white/90 border-sky-200 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200'
                  : 'bg-[#12192c] border-[#293557] text-sky-100 placeholder-sky-300/40 focus:border-sky-400'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Sweet Couple Bet Card */}
      <div className={`backdrop-blur-xl border rounded-3xl p-4.5 space-y-3 ${cardBg}`}>
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider pb-1">
          <span className="flex items-center gap-1.5 text-amber-500">
            <Gift className="w-4 h-4 text-amber-500" />
            <span>Pacto de Amor (La Apuesta)</span>
          </span>
          <span className="text-[10px] text-slate-400 font-medium">¿Quién cocina o paga?</span>
        </div>

        <div className="space-y-1.5">
          {DEFAULT_COUPLE_BETS.slice(0, 4).map((bet) => (
            <button
              key={bet}
              type="button"
              onClick={() => {
                sound.playTap();
                setIsCustomBet(false);
                setSelectedBet(bet);
              }}
              className={`w-full text-left px-3.5 py-2.5 rounded-2xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                !isCustomBet && selectedBet === bet
                  ? isBlush
                    ? 'bg-amber-50 text-amber-900 border border-amber-300 shadow-sm ring-1 ring-amber-300/50'
                    : 'bg-amber-500/20 text-amber-200 border border-amber-500/50 shadow-sm'
                  : isBlush
                  ? 'bg-rose-50/30 text-slate-700 border border-rose-100/60 hover:bg-rose-50/70'
                  : 'bg-[#1b1324]/50 text-rose-200/70 border border-[#3b2744]/70 hover:bg-[#2b1b36]'
              }`}
            >
              <span>{bet}</span>
              {!isCustomBet && selectedBet === bet && (
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
              )}
            </button>
          ))}

          {/* Custom Bet toggle */}
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              setIsCustomBet(true);
            }}
            className={`w-full text-left px-3.5 py-2.5 rounded-2xl text-xs font-medium transition-all cursor-pointer ${
              isCustomBet
                ? isBlush
                  ? 'bg-rose-50 text-rose-800 border border-rose-300'
                  : 'bg-rose-500/20 text-rose-200 border border-rose-500/50'
                : isBlush
                ? 'bg-rose-50/30 text-slate-500 border border-rose-100/60 hover:bg-rose-50/70'
                : 'bg-[#1b1324]/50 text-rose-300/60 border border-[#3b2744]/70 hover:bg-[#2b1b36]'
            }`}
          >
            ✏️ Escribir una apuesta personalizada entre nosotros...
          </button>

          {isCustomBet && (
            <input
              type="text"
              value={customBet}
              onChange={(e) => setCustomBet(e.target.value)}
              placeholder="Ej: El que pierda debe preparar brownies calientes..."
              maxLength={70}
              autoFocus
              className={`w-full rounded-2xl px-3.5 py-2.5 text-xs font-medium border focus:outline-none transition-all ${
                isBlush
                  ? 'bg-white border-rose-300 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-rose-200'
                  : 'bg-[#1e1326] border-rose-500/60 text-rose-100 placeholder-rose-300/40'
              }`}
            />
          )}
        </div>
      </div>

      {/* Match Format & Time */}
      <div className={`backdrop-blur-xl border rounded-3xl p-4.5 space-y-4 ${cardBg}`}>
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider pb-1">
          <span className={`flex items-center gap-1.5 ${isBlush ? 'text-slate-600' : 'text-rose-200'}`}>
            <Layers className="w-4 h-4 text-rose-400" /> Formato de Partida
          </span>
          <span className="text-[10px] text-slate-400 font-medium">Modo maratón</span>
        </div>

        {/* Rounds selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold flex items-center justify-between">
            <span className={textPrimary}>Cantidad de Rondas:</span>
            <span className="text-rose-500 font-bold font-mono">
              {roundsCount} rondas ({roundsCount * 4} preguntas)
            </span>
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {[3, 5, 8, 12].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => {
                  sound.playTap();
                  setRoundsCount(num);
                }}
                className={`py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  roundsCount === num
                    ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-md shadow-rose-300/30'
                    : isBlush
                    ? 'bg-rose-50/50 text-slate-600 border border-rose-100 hover:bg-rose-100/60'
                    : 'bg-[#1e1326] text-rose-200/70 border border-[#3d274b] hover:text-white'
                }`}
              >
                {num === 3 && '3 (Corta)'}
                {num === 5 && '5 (Estándar)'}
                {num === 8 && '8 (Duelo)'}
                {num === 12 && '12 (Horas)'}
              </button>
            ))}
          </div>
        </div>

        {/* Timer selector */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold flex items-center justify-between">
            <span className={`flex items-center gap-1 ${textPrimary}`}>
              <Clock className="w-3.5 h-3.5 text-amber-500" /> Tiempo por pregunta:
            </span>
            <span className="text-amber-500 font-bold font-mono">{timeSeconds}s</span>
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {[10, 15, 20, 25].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  sound.playTap();
                  setTimeSeconds(s);
                }}
                className={`py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  timeSeconds === s
                    ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold shadow-md shadow-amber-300/30'
                    : isBlush
                    ? 'bg-rose-50/50 text-slate-600 border border-rose-100 hover:bg-rose-100/60'
                    : 'bg-[#1e1326] text-rose-200/70 border border-[#3d274b] hover:text-white'
                }`}
              >
                {s}s
              </button>
            ))}
          </div>
        </div>

        {/* Categories selector */}
        <div className="space-y-2">
          <span className={`text-xs font-semibold block ${textPrimary}`}>
            Temas incluidos en la trivia:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(CATEGORY_LABELS) as QuestionCategory[]).map((cat) => {
              const meta = CATEGORY_LABELS[cat];
              const isSelected = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`p-2.5 rounded-2xl text-left border text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? isBlush
                        ? 'bg-rose-50/80 border-rose-300 text-slate-800 shadow-sm'
                        : `${meta.badgeBg} shadow-sm`
                      : isBlush
                      ? 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                      : 'bg-[#1b1324]/40 border-[#322040] text-rose-300/40 opacity-60'
                  }`}
                >
                  <span className="text-base">{meta.icon}</span>
                  <span className="truncate">{meta.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI endless question option */}
      <button
        type="button"
        onClick={() => {
          sound.playTap();
          onOpenAiGenerator();
        }}
        className={`w-full py-2.5 px-4 rounded-2xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
          isBlush
            ? 'bg-purple-50/70 border-purple-200 text-purple-700 hover:bg-purple-100/60 shadow-sm'
            : 'bg-purple-950/30 border-purple-500/30 text-purple-300 hover:bg-purple-900/40'
        }`}
      >
        <Bot className="w-4 h-4 text-purple-500" />
        <span>Crear rondas infinitas personalizadas con IA</span>
        <Sparkles className="w-3.5 h-3.5 text-purple-500" />
      </button>

      {/* Big Pillowy Primary Start Button */}
      <button
        type="button"
        onClick={handleStart}
        className="w-full py-4 px-6 rounded-3xl bg-gradient-to-r from-rose-400 via-pink-500 to-amber-400 text-white font-black text-base tracking-wide shadow-lg shadow-rose-300/40 hover:shadow-rose-400/50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-['Outfit'] cursor-pointer"
      >
        <Heart className="w-5 h-5 fill-white" />
        <span>¡Comenzar Duelo de Novios!</span>
      </button>
    </div>
  );
};
