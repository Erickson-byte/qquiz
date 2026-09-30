import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Player, LeaderboardEntry } from '../types/game';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';
import { Crown, Flame, RotateCcw, Award, Heart, CheckCircle2, Trophy } from 'lucide-react';

interface GameOverModalProps {
  players: [Player, Player];
  totalRounds: number;
  bet: string;
  onPlayAgain: () => void;
  onSaveToLeaderboard: (entry: LeaderboardEntry) => void;
  onViewLeaderboard: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  players,
  totalRounds,
  bet,
  onPlayAgain,
  onSaveToLeaderboard,
  onViewLeaderboard,
}) => {
  const { isBlush } = useTheme();
  const [p1, p2] = players;
  const isTie = p1.score === p2.score;
  const winner = p1.score > p2.score ? p1 : p2;
  const loser = p1.score > p2.score ? p2 : p1;

  const [saved, setSaved] = useState(false);
  const [locationName, setLocationName] = useState('Tegucigalpa, Honduras 🇭🇳');

  useEffect(() => {
    sound.playFanfare();

    // Trigger sweet pastel celebration confetti
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#f43f5e', '#fb7185', '#38bdf8', '#fbbf24', '#fbcfe8', '#a78bfa'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const totalQuestions = (p1.correctCount + p1.wrongCount) + (p2.correctCount + p2.wrongCount);
  const totalCorrect = p1.correctCount + p2.correctCount;
  const coupleAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const totalCoupleScore = p1.score + p2.score;

  const getBadgeTitle = (score: number) => {
    if (score >= 4500) return 'Pareja Legendaria Catracha 🇭🇳';
    if (score >= 3500) return 'Mentes Maestras de Copán 🏛️';
    if (score >= 2500) return 'Sabios del Duelo de Novios 💡';
    return 'Dúo Aventurero Romántico ✨';
  };

  const handleSaveRanking = () => {
    sound.playCorrect();
    const entry: LeaderboardEntry = {
      id: `custom-${Date.now()}`,
      coupleName: `${p1.name} & ${p2.name}`,
      player1Name: p1.name,
      player2Name: p2.name,
      winnerName: isTie ? '¡Empate de Amor!' : `${winner.name} 👑`,
      totalScore: totalCoupleScore,
      roundsPlayed: totalRounds,
      accuracy: coupleAccuracy,
      date: 'Hoy',
      location: locationName.trim() || 'Honduras 🇭🇳',
      rankBadge: getBadgeTitle(totalCoupleScore),
      isCustom: true,
    };
    onSaveToLeaderboard(entry);
    setSaved(true);
  };

  const cardBg = isBlush
    ? 'bg-white/85 border-rose-100/90 shadow-[0_8px_30px_rgb(244,63,94,0.06)]'
    : 'bg-[#22172b]/85 border-[#3d274b]/80 shadow-[0_8px_30px_rgb(0,0,0,0.35)]';

  const textPrimary = isBlush ? 'text-slate-800' : 'text-rose-50';
  const textMuted = isBlush ? 'text-slate-500' : 'text-rose-200/70';

  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-5 animate-in fade-in duration-300">
      {/* Winner Hero Banner */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-gradient-to-tr from-amber-300/30 to-rose-300/30 border border-amber-300/50 mb-1 shadow-sm">
          <Crown className="w-8 h-8 text-amber-500 fill-amber-400 animate-bounce" />
        </div>

        <h2 className="text-3xl font-black tracking-tight font-['Outfit']">
          <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
            {isTie ? '¡Empate de Amor!' : `¡Ganó ${winner.name}!`}
          </span>
        </h2>

        <p className={`text-xs ${textMuted} max-w-xs mx-auto leading-relaxed`}>
          {isTie
            ? '¡Ambos son igual de asombrosos! Ambos comparten el premio y la apuesta.'
            : `Con una puntuación admirable de ${winner.score.toLocaleString()} puntos.`}
        </p>
      </div>

      {/* The Bet Resolution Card */}
      <div
        className={`border rounded-3xl p-4.5 space-y-2.5 backdrop-blur-xl ${
          isBlush
            ? 'bg-gradient-to-br from-amber-50/90 via-rose-50/80 to-white border-amber-200 shadow-sm'
            : 'bg-gradient-to-br from-[#2a1e2b]/90 via-[#23172c] to-[#1a1222] border-amber-500/30'
        }`}
      >
        <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Cumplimiento del Pacto de Pareja</span>
        </div>
        <p className={`text-xs sm:text-sm font-semibold ${textPrimary}`}>
          {isTie
            ? `Como empataron, ¡ambos disfrutarán de: "${bet}"!`
            : `A ${loser.name} le corresponde cumplir con amor la apuesta:`}
        </p>
        <div
          className={`p-3.5 rounded-2xl text-xs font-semibold italic ${
            isBlush
              ? 'bg-white/80 border border-amber-200/80 text-amber-900 shadow-sm'
              : 'bg-[#18111f]/80 border border-amber-500/20 text-amber-200'
          }`}
        >
          "{bet}"
        </div>
      </div>

      {/* Final Scores Comparison */}
      <div className="grid grid-cols-2 gap-3">
        {/* P1 Card */}
        <div
          className={`p-4 rounded-3xl border text-center space-y-1.5 ${
            p1.score > p2.score
              ? isBlush
                ? 'bg-rose-50/90 border-rose-300 shadow-sm ring-1 ring-rose-200'
                : 'bg-rose-500/20 border-rose-400/50 shadow-md'
              : isBlush
              ? 'bg-white/80 border-rose-100'
              : 'bg-[#1e1326]/60 border-[#382346]'
          }`}
        >
          <div className="text-2xl">{p1.avatar}</div>
          <div className={`text-xs font-extrabold truncate ${textPrimary}`}>{p1.name}</div>
          <div className="text-2xl font-black text-rose-500 font-mono">
            {p1.score.toLocaleString()}
          </div>
          <div className={`text-[11px] ${textMuted} space-y-0.5`}>
            <div>{p1.correctCount} aciertos</div>
            {p1.maxStreak > 1 && (
              <div className="text-amber-500 font-bold flex items-center justify-center gap-1">
                <Flame className="w-3 h-3" /> Racha x{p1.maxStreak}
              </div>
            )}
          </div>
        </div>

        {/* P2 Card */}
        <div
          className={`p-4 rounded-3xl border text-center space-y-1.5 ${
            p2.score > p1.score
              ? isBlush
                ? 'bg-sky-50/90 border-sky-300 shadow-sm ring-1 ring-sky-200'
                : 'bg-sky-500/20 border-sky-400/50 shadow-md'
              : isBlush
              ? 'bg-white/80 border-sky-100'
              : 'bg-[#121c2e]/60 border-[#253655]'
          }`}
        >
          <div className="text-2xl">{p2.avatar}</div>
          <div className={`text-xs font-extrabold truncate ${textPrimary}`}>{p2.name}</div>
          <div className="text-2xl font-black text-sky-500 font-mono">
            {p2.score.toLocaleString()}
          </div>
          <div className={`text-[11px] ${textMuted} space-y-0.5`}>
            <div>{p2.correctCount} aciertos</div>
            {p2.maxStreak > 1 && (
              <div className="text-amber-500 font-bold flex items-center justify-center gap-1">
                <Flame className="w-3 h-3" /> Racha x{p2.maxStreak}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Global Ranking Registration Section */}
      <div className={`backdrop-blur-xl border rounded-3xl p-4.5 space-y-3 ${cardBg}`}>
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1.5 text-sky-500">
            <Trophy className="w-4 h-4" /> Registrar en el Ranking Global
          </span>
          <span className={`text-[11px] ${textMuted}`}>Juntos: {totalCoupleScore} pts</span>
        </div>

        <p className={`text-xs ${textMuted} leading-relaxed`}>
          Inscriban su puntuación en la tabla de parejas. Título obtenido:{' '}
          <strong className="text-amber-600 font-bold">{getBadgeTitle(totalCoupleScore)}</strong>.
        </p>

        {!saved ? (
          <div className="space-y-2">
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              placeholder="Su ciudad (ej: Tegucigalpa, Honduras 🇭🇳)"
              className={`w-full rounded-2xl px-3.5 py-2.5 text-xs font-medium border focus:outline-none transition-all ${
                isBlush
                  ? 'bg-rose-50/40 border-rose-200 text-slate-800 focus:ring-2 focus:ring-rose-200'
                  : 'bg-[#18111f] border-[#3d274b] text-rose-100'
              }`}
            />
            <button
              type="button"
              onClick={handleSaveRanking}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-sky-300/30 active:scale-[0.99] transition-all cursor-pointer"
            >
              ¡Guardar Récord de Pareja!
            </button>
          </div>
        ) : (
          <div
            className={`p-3 rounded-2xl flex items-center justify-between text-xs font-bold border ${
              isBlush
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> ¡Récord guardado con éxito!
            </span>
            <button
              onClick={() => {
                sound.playTap();
                onViewLeaderboard();
              }}
              className="underline text-[11px] cursor-pointer"
            >
              Ver Tabla
            </button>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-1">
        <button
          type="button"
          onClick={() => {
            sound.playTap();
            onPlayAgain();
          }}
          className="w-full py-4 px-6 rounded-3xl bg-gradient-to-r from-rose-400 via-pink-500 to-amber-400 text-white font-black text-sm tracking-wide shadow-lg shadow-rose-300/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-['Outfit']"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Jugar la Revancha de Amor</span>
        </button>

        <button
          type="button"
          onClick={() => {
            sound.playTap();
            onViewLeaderboard();
          }}
          className={`w-full py-3 px-4 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isBlush
              ? 'bg-white border-rose-200 text-slate-700 hover:bg-rose-50/60 shadow-sm'
              : 'bg-[#22172b] border-[#3d274b] text-rose-200 hover:text-white'
          }`}
        >
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>Ver Ranking Global &amp; Parejas Top</span>
        </button>
      </div>
    </div>
  );
};
