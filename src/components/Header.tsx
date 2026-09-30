import React from 'react';
import { Volume2, VolumeX, Trophy, Sparkles, HelpCircle, RotateCcw, Heart, Moon, Sun } from 'lucide-react';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenLeaderboard: () => void;
  onOpenCuriousFacts: () => void;
  onOpenRules: () => void;
  onResetGame?: () => void;
  inGame?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  soundEnabled,
  onToggleSound,
  onOpenLeaderboard,
  onOpenCuriousFacts,
  onOpenRules,
  onResetGame,
  inGame = false,
}) => {
  const { isBlush, toggleTheme } = useTheme();

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-colors duration-300 backdrop-blur-xl px-4 py-2.5 ${
        isBlush
          ? 'bg-white/80 border-b border-rose-100/80 shadow-[0_4px_20px_-4px_rgba(244,63,94,0.06)]'
          : 'bg-[#1b1422]/85 border-b border-[#3b2744]/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]'
      }`}
    >
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-rose-400 via-pink-400 to-amber-300 p-[1.5px] shadow-sm shadow-rose-300/30">
              <div
                className={`w-full h-full rounded-[14px] flex items-center justify-center text-sm font-black transition-colors ${
                  isBlush ? 'bg-rose-50 text-rose-600' : 'bg-[#251830] text-rose-300'
                }`}
              >
                🇭🇳
              </div>
            </div>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 absolute -top-1 -right-1 animate-pulse" />
          </div>

          <div>
            <h1 className="text-sm font-black tracking-tight flex items-center gap-1.5 font-['Outfit']">
              <span className={isBlush ? 'text-slate-800' : 'text-rose-50'}>
                Duelo de Parejas
              </span>
              <span
                className={`text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded-full ${
                  isBlush
                    ? 'text-rose-600 bg-rose-100/70 border border-rose-200/60'
                    : 'text-rose-300 bg-rose-500/15 border border-rose-500/30'
                }`}
              >
                Amor &amp; Saber
              </span>
            </h1>
            <p className={`text-[10px] font-medium ${isBlush ? 'text-slate-400' : 'text-rose-300/60'}`}>
              Honduras · Palabras Curiosas · Retos
            </p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1">
          {inGame && onResetGame && (
            <button
              onClick={() => {
                sound.playTap();
                if (window.confirm('¿Deseas reiniciar la partida actual?')) {
                  onResetGame();
                }
              }}
              title="Reiniciar partida"
              className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all cursor-pointer ${
                isBlush
                  ? 'text-slate-500 hover:text-slate-800 hover:bg-rose-50'
                  : 'text-rose-200/70 hover:text-rose-50 hover:bg-[#2b1c37]'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Theme Switcher Toggle */}
          <button
            onClick={() => {
              sound.playTap();
              toggleTheme();
            }}
            title={isBlush ? 'Cambiar a modo noche suave' : 'Cambiar a modo blush suave'}
            className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all cursor-pointer ${
              isBlush
                ? 'text-amber-500 hover:bg-amber-50'
                : 'text-purple-300 hover:bg-[#2b1c37]'
            }`}
          >
            {isBlush ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>

          {/* Curious Facts Glossary */}
          <button
            onClick={() => {
              sound.playTap();
              onOpenCuriousFacts();
            }}
            title="Glosario de Palabras Curiosas y Datos"
            className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all cursor-pointer ${
              isBlush
                ? 'text-rose-500 hover:bg-rose-50'
                : 'text-rose-300 hover:bg-[#2b1c37]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>

          {/* Global Leaderboard */}
          <button
            onClick={() => {
              sound.playTap();
              onOpenLeaderboard();
            }}
            title="Ranking Global"
            className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all cursor-pointer ${
              isBlush
                ? 'text-sky-500 hover:bg-sky-50'
                : 'text-sky-300 hover:bg-[#2b1c37]'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
          </button>

          {/* Rules */}
          <button
            onClick={() => {
              sound.playTap();
              onOpenRules();
            }}
            title="Cómo jugar"
            className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all cursor-pointer ${
              isBlush
                ? 'text-slate-400 hover:text-slate-700 hover:bg-rose-50'
                : 'text-rose-200/60 hover:text-rose-50 hover:bg-[#2b1c37]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>

          {/* Sound Mute */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Silenciar sonidos' : 'Activar sonidos'}
            className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all cursor-pointer ${
              isBlush
                ? 'text-slate-400 hover:text-slate-700 hover:bg-rose-50'
                : 'text-rose-200/60 hover:text-rose-50 hover:bg-[#2b1c37]'
            }`}
          >
            {soundEnabled ? (
              <Volume2 className={`w-3.5 h-3.5 ${isBlush ? 'text-emerald-500' : 'text-emerald-400'}`} />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-40" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
