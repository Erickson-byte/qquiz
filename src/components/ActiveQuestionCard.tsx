import React, { useState, useEffect, useRef } from 'react';
import { Question, Player } from '../types/game';
import { CATEGORY_LABELS } from '../data/questions';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';
import { Clock, CheckCircle2, XCircle, Flame, ArrowRight, Lightbulb, Sparkles, Heart } from 'lucide-react';

interface ActiveQuestionCardProps {
  question: Question;
  activePlayer: Player;
  otherPlayer: Player;
  roundNumber: number;
  totalRounds: number;
  questionNumberInRound: number;
  totalQuestionsInRound: number;
  roundMultiplier: number;
  timeLimitSeconds: number;
  bet: string;
  onAnswer: (isCorrect: boolean, pointsEarned: number, timeSpentSeconds: number) => void;
  onNextQuestion: () => void;
}

export const ActiveQuestionCard: React.FC<ActiveQuestionCardProps> = ({
  question,
  activePlayer,
  otherPlayer,
  roundNumber,
  totalRounds,
  questionNumberInRound,
  totalQuestionsInRound,
  roundMultiplier,
  timeLimitSeconds,
  bet,
  onAnswer,
  onNextQuestion,
}) => {
  const { isBlush } = useTheme();

  const [timeLeft, setTimeLeft] = useState(timeLimitSeconds);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [pointsAwarded, setPointsAwarded] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    setTimeLeft(timeLimitSeconds);
    setSelectedOption(null);
    setIsAnswered(false);
    setPointsAwarded(0);
    startTimeRef.current = Date.now();

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }
        if (prev <= 4) {
          sound.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.id, activePlayer.id]);

  const handleTimeOut = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    sound.playWrong();
    setSelectedOption(-1);
    onAnswer(false, 0, timeLimitSeconds);
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);

    setIsAnswered(true);
    setSelectedOption(index);

    const timeSpent = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
    const isCorrect = index === question.correctAnswerIndex;

    if (isCorrect) {
      sound.playCorrect();
      const speedRatio = Math.max(0, timeLeft / timeLimitSeconds);
      const speedBonus = Math.round(speedRatio * 50);
      const streakBonus = activePlayer.currentStreak >= 2 ? 30 : 0;
      const totalPoints = Math.round((100 + speedBonus + streakBonus) * roundMultiplier);

      setPointsAwarded(totalPoints);
      onAnswer(true, totalPoints, timeSpent);
    } else {
      sound.playWrong();
      setPointsAwarded(0);
      onAnswer(false, 0, timeSpent);
    }
  };

  const categoryMeta = CATEGORY_LABELS[question.category] || CATEGORY_LABELS.general;
  const isP1 = activePlayer.id === 'p1';

  // Soft romantic player themes
  const playerThemeColor = isP1
    ? isBlush
      ? 'border-rose-200/80 bg-rose-50/70 text-rose-600'
      : 'border-rose-500/30 bg-[#2d1b37]/60 text-rose-300'
    : isBlush
    ? 'border-sky-200/80 bg-sky-50/70 text-sky-600'
    : 'border-sky-500/30 bg-[#1c2238]/60 text-sky-300';

  const playerAccentBg = isP1
    ? 'from-rose-400 to-pink-500 text-white'
    : 'from-sky-400 to-blue-500 text-white';

  const timerPercentage = (timeLeft / timeLimitSeconds) * 100;
  const timerColor =
    timeLeft <= 4
      ? 'bg-rose-400 animate-pulse'
      : timeLeft <= 7
      ? 'bg-amber-400'
      : 'bg-emerald-400';

  const cardBg = isBlush
    ? 'bg-white/85 border-rose-100/90 shadow-[0_8px_30px_rgb(244,63,94,0.06)]'
    : 'bg-[#22172b]/85 border-[#3d274b]/80 shadow-[0_8px_30px_rgb(0,0,0,0.35)]';

  const textPrimary = isBlush ? 'text-slate-800' : 'text-rose-50';
  const textMuted = isBlush ? 'text-slate-500' : 'text-rose-200/70';

  return (
    <div className="max-w-md mx-auto px-4 py-3 space-y-3.5 animate-in fade-in duration-200">
      {/* Turn indicator card */}
      <div className={`p-3.5 rounded-3xl border ${playerThemeColor} flex items-center justify-between shadow-sm transition-all`}>
        <div className="flex items-center gap-2.5">
          <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${playerAccentBg} flex items-center justify-center text-xl shadow-md shadow-rose-300/20`}>
            {activePlayer.avatar}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-black tracking-tight font-['Outfit'] ${textPrimary}`}>
                Turno de {activePlayer.name}
              </span>
              {activePlayer.currentStreak >= 2 && (
                <span className="inline-flex items-center gap-0.5 text-[10px] font-black px-2 py-0.2 bg-amber-400/20 text-amber-600 border border-amber-300 rounded-full animate-bounce">
                  <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
                  x{activePlayer.currentStreak}
                </span>
              )}
            </div>
            <p className={`text-[11px] ${textMuted} flex items-center gap-1`}>
              <span>Pasa el móvil para responder</span>
              <Heart className="w-2.5 h-2.5 text-rose-400 fill-rose-400" />
            </p>
          </div>
        </div>

        {/* Current score badge */}
        <div className="text-right">
          <span className={`text-[10px] uppercase font-bold tracking-wider block ${textMuted}`}>
            Puntos
          </span>
          <span className={`text-base font-black font-mono ${isP1 ? 'text-rose-500' : 'text-sky-500'}`}>
            {activePlayer.score.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Progress & Multiplier Banner */}
      <div className={`flex items-center justify-between text-xs px-1 font-medium ${textMuted}`}>
        <span className="flex items-center gap-1.5">
          <span>Ronda {roundNumber}/{totalRounds}</span>
          <span>·</span>
          <span>Pregunta {questionNumberInRound}/{totalQuestionsInRound}</span>
        </span>
        <div className="flex items-center gap-1.5">
          {roundMultiplier > 1 && (
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-sm animate-pulse">
              Puntos x{roundMultiplier}
            </span>
          )}
          <span className="text-[11px] truncate max-w-[130px]" title={bet}>
            🎁 {bet}
          </span>
        </div>
      </div>

      {/* Countdown Timer Bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs font-semibold px-0.5">
          <span className={`flex items-center gap-1.5 ${textMuted}`}>
            <Clock className="w-3.5 h-3.5" />
            <span>Tiempo:</span>
          </span>
          <span
            className={`font-mono font-bold text-xs ${
              timeLeft <= 4 ? 'text-rose-500 animate-pulse text-sm' : textPrimary
            }`}
          >
            {timeLeft}s
          </span>
        </div>
        <div
          className={`w-full h-2 rounded-full overflow-hidden p-0.5 border ${
            isBlush ? 'bg-rose-100/50 border-rose-200/60' : 'bg-[#181020] border-[#362343]'
          }`}
        >
          <div
            className={`h-full rounded-full transition-all duration-300 ${timerColor}`}
            style={{ width: `${Math.max(0, timerPercentage)}%` }}
          />
        </div>
      </div>

      {/* Question Main Card */}
      <div className={`backdrop-blur-xl border rounded-3xl p-5 space-y-4 relative overflow-hidden ${cardBg}`}>
        {/* Category Header */}
        <div className="flex items-center justify-between">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
              isBlush
                ? 'bg-rose-50 border-rose-200 text-rose-600'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
            }`}
          >
            <span>{categoryMeta.icon}</span>
            <span>{categoryMeta.label}</span>
          </div>
          {question.difficulty && (
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${textMuted}`}>
              {question.difficulty}
            </span>
          )}
        </div>

        {/* Question Text */}
        <h3 className={`text-base sm:text-lg font-bold leading-snug ${textPrimary}`}>
          {question.question}
        </h3>

        {/* Option Choices */}
        <div className="space-y-2.5 pt-1">
          {question.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === question.correctAnswerIndex;

            let buttonStyle = isBlush
              ? 'bg-white/95 border-rose-100/90 text-slate-700 hover:border-rose-300 hover:bg-rose-50/50 shadow-sm'
              : 'bg-[#1b1324]/80 border-[#3d274b] text-rose-100 hover:border-rose-400/50 hover:bg-[#281b34]';

            if (isAnswered) {
              if (isCorrect) {
                buttonStyle = isBlush
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold shadow-sm ring-1 ring-emerald-300'
                  : 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold shadow-md';
              } else if (isSelected && !isCorrect) {
                buttonStyle = isBlush
                  ? 'bg-rose-50 border-rose-400 text-rose-800 line-through opacity-80'
                  : 'bg-rose-950/40 border-rose-500 text-rose-200 line-through opacity-80';
              } else {
                buttonStyle = isBlush
                  ? 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-50'
                  : 'bg-[#150f1d]/50 border-[#2b1c37] text-rose-300/30 opacity-50';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleOptionClick(idx)}
                className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${buttonStyle} cursor-pointer active:scale-[0.99]`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-6 h-6 rounded-xl text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                      isBlush ? 'bg-rose-50 text-rose-500' : 'bg-[#2b1b36] text-rose-300'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-snug">{option}</span>
                </div>

                {isAnswered && (
                  <div>
                    {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                    {isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Result & Score feedback badge */}
        {isAnswered && (
          <div className="pt-2 animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-3">
            <div
              className={`p-3.5 rounded-2xl flex items-center justify-between text-xs font-bold ${
                selectedOption === question.correctAnswerIndex
                  ? isBlush
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                  : isBlush
                  ? 'bg-rose-50 border border-rose-200 text-rose-800'
                  : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
              }`}
            >
              <div className="flex items-center gap-2">
                {selectedOption === question.correctAnswerIndex ? (
                  <>
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    <span>¡Respuesta correcta, {activePlayer.name}! (+{pointsAwarded} pts)</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span>
                      {selectedOption === -1 ? '¡Tiempo agotado!' : '¡Casi! Buen intento amor'}
                    </span>
                  </>
                )}
              </div>
              <span className={`text-[11px] font-normal ${textMuted}`}>
                {otherPlayer.name}: {otherPlayer.score} pts
              </span>
            </div>

            {/* Soft Dato Curioso & Insight Box */}
            <div
              className={`border rounded-2xl p-3.5 space-y-1.5 text-xs ${
                isBlush
                  ? 'bg-amber-50/70 border-amber-200/80 text-amber-950'
                  : 'bg-[#291e2b]/80 border-amber-500/20 text-rose-100'
              }`}
            >
              <div className="flex items-center gap-1.5 text-amber-600 font-bold uppercase tracking-wider text-[11px]">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Dato Curioso &amp; Explicación</span>
              </div>
              <p className="leading-relaxed text-[11px] sm:text-xs opacity-90">
                {question.explanation}
              </p>
              {question.curiousFact && (
                <div className="pt-1.5 border-t border-amber-200/60 text-[11px] text-amber-800/90 italic font-medium">
                  💡 {question.curiousFact}
                </div>
              )}
            </div>

            {/* Next question button */}
            <button
              type="button"
              onClick={() => {
                sound.playTap();
                onNextQuestion();
              }}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-400 via-pink-500 to-amber-400 text-white font-black text-sm tracking-wide shadow-md shadow-rose-300/30 flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer font-['Outfit']"
            >
              <span>Siguiente Desafío</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Mini Head-to-Head scoreboard */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <div
          className={`p-2.5 rounded-2xl border flex items-center justify-between ${
            isBlush ? 'bg-rose-50/70 border-rose-200/60' : 'bg-[#251731]/60 border-rose-500/20'
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-base">{activePlayer.id === 'p1' ? activePlayer.avatar : otherPlayer.avatar}</span>
            <span className={`text-xs font-bold truncate ${textPrimary}`}>
              {activePlayer.id === 'p1' ? activePlayer.name : otherPlayer.name}
            </span>
          </div>
          <span className="font-mono font-black text-rose-500 text-xs">
            {activePlayer.id === 'p1' ? activePlayer.score : otherPlayer.score}
          </span>
        </div>

        <div
          className={`p-2.5 rounded-2xl border flex items-center justify-between ${
            isBlush ? 'bg-sky-50/70 border-sky-200/60' : 'bg-[#182136]/60 border-sky-500/20'
          }`}
        >
          <div className="flex items-center gap-2 truncate">
            <span className="text-base">{activePlayer.id === 'p2' ? activePlayer.avatar : otherPlayer.avatar}</span>
            <span className={`text-xs font-bold truncate ${textPrimary}`}>
              {activePlayer.id === 'p2' ? activePlayer.name : otherPlayer.name}
            </span>
          </div>
          <span className="font-mono font-black text-sky-500 text-xs">
            {activePlayer.id === 'p2' ? activePlayer.score : otherPlayer.score}
          </span>
        </div>
      </div>
    </div>
  );
};
