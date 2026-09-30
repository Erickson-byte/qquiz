import React, { useState } from 'react';
import { LeaderboardEntry } from '../types/game';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';
import { Trophy, X, MapPin, Award, Sparkles, Heart } from 'lucide-react';

interface LeaderboardModalProps {
  entries: LeaderboardEntry[];
  isOpen: boolean;
  onClose: () => void;
  onClearCustomHistory?: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  entries,
  isOpen,
  onClose,
}) => {
  const { isBlush } = useTheme();
  const [activeTab, setActiveTab] = useState<'global' | 'history'>('global');

  if (!isOpen) return null;

  const sortedEntries = [...entries].sort((a, b) => b.totalScore - a.totalScore);
  const userHistoryEntries = entries.filter((e) => e.isCustom);

  const cardBg = isBlush
    ? 'bg-white border-rose-100 shadow-[0_20px_60px_-15px_rgba(244,63,94,0.15)] text-slate-800'
    : 'bg-[#1e1425] border-[#3d274b] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] text-rose-50';

  const textPrimary = isBlush ? 'text-slate-800' : 'text-rose-50';
  const textMuted = isBlush ? 'text-slate-500' : 'text-rose-200/70';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-md border rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden ${cardBg}`}>
        {/* Header */}
        <div
          className={`p-4 border-b flex items-center justify-between ${
            isBlush ? 'bg-rose-50/60 border-rose-100' : 'bg-[#180f1f]/80 border-[#321f3f]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-2xl bg-amber-400/20 border border-amber-300 flex items-center justify-center text-amber-500">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold font-['Outfit'] flex items-center gap-1.5">
                <span>Ranking Global de Parejas</span>
                <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              </h3>
              <p className={`text-[11px] ${textMuted}`}>Compite con tu novio por la cima mundial</p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className={`w-8 h-8 rounded-2xl flex items-center justify-center transition-colors cursor-pointer ${
              isBlush ? 'bg-white hover:bg-rose-100 text-slate-500' : 'bg-[#291c33] text-rose-300 hover:text-white'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div
          className={`px-4 pt-3 pb-2 border-b flex items-center gap-2 ${
            isBlush ? 'bg-rose-50/30 border-rose-100' : 'bg-[#180f1f]/40 border-[#321f3f]'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              sound.playTap();
              setActiveTab('global');
            }}
            className={`flex-1 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'global'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md shadow-amber-300/30'
                : isBlush
                ? 'text-slate-500 hover:bg-rose-100/60'
                : 'text-rose-200/60 hover:bg-[#2b1b36]'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Top Parejas Mundial</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sound.playTap();
              setActiveTab('history');
            }}
            className={`flex-1 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-md shadow-rose-300/30'
                : isBlush
                ? 'text-slate-500 hover:bg-rose-100/60'
                : 'text-rose-200/60 hover:bg-[#2b1b36]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestras Partidas ({userHistoryEntries.length})</span>
          </button>
        </div>

        {/* List of ranks */}
        <div className="p-4 overflow-y-auto space-y-2.5 flex-1">
          {(activeTab === 'global' ? sortedEntries : userHistoryEntries).length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <Award className="w-8 h-8 text-rose-300 mx-auto" />
              <p className={`text-xs ${textMuted}`}>
                {activeTab === 'history'
                  ? 'Aún no han registrado partidas. ¡Completen su primer duelo de rondas!'
                  : 'No hay puntuaciones registradas.'}
              </p>
            </div>
          ) : (
            (activeTab === 'global' ? sortedEntries : userHistoryEntries).map((item, index) => {
              const isFirst = index === 0;
              const isSecond = index === 1;
              const isThird = index === 2;

              let rankBadgeColor = isBlush
                ? 'bg-rose-50 text-slate-700 border-rose-100'
                : 'bg-[#291b33] text-rose-200 border-[#3d274b]';

              if (isFirst) rankBadgeColor = 'bg-amber-100 text-amber-900 border-amber-300 shadow-sm';
              if (isSecond) rankBadgeColor = 'bg-slate-100 text-slate-800 border-slate-300';
              if (isThird) rankBadgeColor = 'bg-amber-50 text-amber-800 border-amber-200';

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl p-3 border transition-all ${
                    item.isCustom
                      ? isBlush
                        ? 'bg-rose-50/80 border-rose-200/90 shadow-sm'
                        : 'bg-rose-950/30 border-rose-500/40 shadow-sm'
                      : isBlush
                      ? 'bg-white border-rose-100/60 hover:border-rose-200'
                      : 'bg-[#25172e]/60 border-[#3b2548]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 truncate">
                      <div
                        className={`w-7 h-7 rounded-xl border font-black text-xs font-mono flex items-center justify-center shrink-0 ${rankBadgeColor}`}
                      >
                        {isFirst ? '🥇' : isSecond ? '🥈' : isThird ? '🥉' : `#${index + 1}`}
                      </div>

                      <div className="truncate">
                        <div className="flex items-center gap-1.5 truncate">
                          <span className={`font-extrabold text-xs truncate ${textPrimary}`}>
                            {item.coupleName}
                          </span>
                          {item.isCustom && (
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-200">
                              Ustedes ❤️
                            </span>
                          )}
                        </div>
                        <div className={`flex items-center gap-2 text-[10px] ${textMuted}`}>
                          <span className="flex items-center gap-0.5">
                            <MapPin className="w-2.5 h-2.5 opacity-60" />
                            {item.location}
                          </span>
                          <span>·</span>
                          <span className="text-amber-500 font-medium">{item.rankBadge}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-mono font-black text-sm text-amber-500">
                        {item.totalScore.toLocaleString()}{' '}
                        <span className="text-[10px] opacity-70">pts</span>
                      </div>
                      <div className={`text-[10px] ${textMuted}`}>
                        Aciertos: <strong className="text-emerald-500">{item.accuracy}%</strong>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-1.5 flex items-center justify-between text-[10px] pt-1 border-t ${
                      isBlush ? 'border-rose-100 text-slate-400' : 'border-[#382346] text-rose-200/50'
                    }`}
                  >
                    <span>Ganador: <strong className={textPrimary}>{item.winnerName}</strong></span>
                    <span>{item.roundsPlayed} rondas</span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div
          className={`p-3 border-t text-center text-[11px] ${
            isBlush ? 'bg-rose-50/50 border-rose-100 text-slate-500' : 'bg-[#180f1f] border-[#321f3f] text-rose-300/60'
          }`}
        >
          ¡Cada desafío completado une más a la pareja en el ranking mundial!
        </div>
      </div>
    </div>
  );
};
