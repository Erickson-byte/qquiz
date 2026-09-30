import React from 'react';
import { Player, QuestionCategory } from '../types/game';
import { CATEGORY_LABELS } from '../data/questions';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';
import { Trophy, Flame, ArrowRight, Sparkles, Heart } from 'lucide-react';

interface RoundTransitionProps {
  completedRound: number;
  totalRounds: number;
  nextCategory: QuestionCategory;
  nextMultiplier: number;
  players: [Player, Player];
  bet: string;
  onStartNextRound: () => void;
}

export const RoundTransition: React.FC<RoundTransitionProps> = ({
  completedRound,
  totalRounds,
  nextCategory,
  nextMultiplier,
  players,
  bet,
  onStartNextRound,
}) => {
  const { isBlush } = useTheme();
  const [p1, p2] = players;
  const nextCatMeta = CATEGORY_LABELS[nextCategory] || CATEGORY_LABELS.general;

  const scoreDiff = Math.abs(p1.score - p2.score);
  const leader = p1.score > p2.score ? p1 : p2.score > p1.score ? p2 : null;

  const cardBg = isBlush
    ? 'bg-white/85 border-rose-100/90 shadow-[0_8px_30px_rgb(244,63,94,0.06)]'
    : 'bg-[#22172b]/85 border-[#3d274b]/80 shadow-[0_8px_30px_rgb(0,0,0,0.35)]';

  const textPrimary = isBlush ? 'text-slate-800' : 'text-rose-50';
  const textMuted = isBlush ? 'text-slate-500' : 'text-rose-200/70';

  return (
    <div className="max-w-md mx-auto px-4 py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
      {/* Round Complete Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-600 text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>¡Ronda {completedRound} de {totalRounds} Completada!</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black font-['Outfit']">
          <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
            Resumen del Duelo
          </span>
        </h2>
        <p className={`text-xs ${textMuted}`}>
          {leader
            ? `¡${leader.name} lleva una dulce ventaja de ${scoreDiff} puntos!`
            : '¡Empate absoluto! Ambos tienen mentes brillantes.'}
        </p>
      </div>

      {/* Head to Head Comparison */}
      <div className={`backdrop-blur-xl border rounded-3xl p-5 space-y-4 ${cardBg}`}>
        <div className="grid grid-cols-2 gap-3">
          {/* Player 1 Card */}
          <div
            className={`p-4 rounded-2xl border text-center space-y-2 transition-all ${
              leader?.id === p1.id
                ? isBlush
                  ? 'bg-rose-50/90 border-rose-300 shadow-sm ring-1 ring-rose-200'
                  : 'bg-rose-500/15 border-rose-400/50 shadow-md'
                : isBlush
                ? 'bg-rose-50/30 border-rose-100'
                : 'bg-[#1e1326]/50 border-[#382346]'
            }`}
          >
            <div className="text-3xl">{p1.avatar}</div>
            <div className={`font-extrabold text-xs sm:text-sm truncate ${textPrimary}`}>{p1.name}</div>
            <div className="text-xl font-black text-rose-500 font-mono">
              {p1.score.toLocaleString()} <span className="text-[10px] opacity-70">pts</span>
            </div>
            <div className={`text-[11px] ${textMuted}`}>
              Aciertos: <span className="font-bold">{p1.correctCount}</span>
            </div>
          </div>

          {/* Player 2 Card */}
          <div
            className={`p-4 rounded-2xl border text-center space-y-2 transition-all ${
              leader?.id === p2.id
                ? isBlush
                  ? 'bg-sky-50/90 border-sky-300 shadow-sm ring-1 ring-sky-200'
                  : 'bg-sky-500/15 border-sky-400/50 shadow-md'
                : isBlush
                ? 'bg-sky-50/30 border-sky-100'
                : 'bg-[#121c2e]/50 border-[#253655]'
            }`}
          >
            <div className="text-3xl">{p2.avatar}</div>
            <div className={`font-extrabold text-xs sm:text-sm truncate ${textPrimary}`}>{p2.name}</div>
            <div className="text-xl font-black text-sky-500 font-mono">
              {p2.score.toLocaleString()} <span className="text-[10px] opacity-70">pts</span>
            </div>
            <div className={`text-[11px] ${textMuted}`}>
              Aciertos: <span className="font-bold">{p2.correctCount}</span>
            </div>
          </div>
        </div>

        {/* Bet status */}
        <div
          className={`border rounded-2xl p-3.5 flex items-center gap-2.5 ${
            isBlush ? 'bg-amber-50/80 border-amber-200/80' : 'bg-[#291e28]/80 border-amber-500/30'
          }`}
        >
          <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-amber-700 block">La Apuesta de Pareja en Juego:</span>
            <span className={isBlush ? 'text-slate-700' : 'text-rose-100'}>{bet}</span>
          </div>
        </div>
      </div>

      {/* Next Round Teaser */}
      <div
        className={`border rounded-3xl p-4.5 space-y-2.5 backdrop-blur-xl ${
          isBlush
            ? 'bg-gradient-to-r from-rose-50/80 via-white to-pink-50/80 border-rose-100'
            : 'bg-gradient-to-r from-[#201529] to-[#17101f] border-[#3d274b]'
        }`}
      >
        <div className={`flex items-center justify-between text-xs font-bold uppercase tracking-wider ${textMuted}`}>
          <span>Siguiente Ronda ({completedRound + 1} de {totalRounds})</span>
          {nextMultiplier > 1 && (
            <span className="flex items-center gap-1 text-amber-500 font-black">
              <Flame className="w-3.5 h-3.5" /> Puntos x{nextMultiplier}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{nextCatMeta.icon}</span>
          <div>
            <h4 className={`font-extrabold text-sm ${textPrimary}`}>{nextCatMeta.label}</h4>
            <p className={`text-xs ${textMuted}`}>¡Respiren hondo y a divertirse!</p>
          </div>
        </div>
      </div>

      {/* Button to Proceed */}
      <button
        type="button"
        onClick={() => {
          sound.playCorrect();
          onStartNextRound();
        }}
        className="w-full py-4 px-6 rounded-3xl bg-gradient-to-r from-rose-400 via-pink-500 to-amber-400 text-white font-black text-base tracking-wide shadow-lg shadow-rose-300/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-['Outfit'] cursor-pointer"
      >
        <span>¡Comenzar Ronda {completedRound + 1}!</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
