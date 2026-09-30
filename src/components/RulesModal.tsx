import React from 'react';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';
import { HelpCircle, X, Smartphone, Award, Flame, Clock, Heart } from 'lucide-react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  const { isBlush } = useTheme();

  if (!isOpen) return null;

  const cardBg = isBlush
    ? 'bg-white border-rose-100 shadow-[0_20px_60px_-15px_rgba(244,63,94,0.15)] text-slate-800'
    : 'bg-[#1e1425] border-[#3d274b] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] text-rose-50';

  const textPrimary = isBlush ? 'text-slate-800' : 'text-rose-50';
  const textMuted = isBlush ? 'text-slate-500' : 'text-rose-200/70';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-md border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${cardBg}`}>
        {/* Header */}
        <div
          className={`p-4 border-b flex items-center justify-between ${
            isBlush ? 'bg-rose-50/60 border-rose-100' : 'bg-[#180f1f]/80 border-[#321f3f]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-2xl bg-rose-400/20 border border-rose-300 flex items-center justify-center text-rose-500">
              <Heart className="w-4 h-4 fill-rose-500" />
            </div>
            <div>
              <h3 className="text-base font-extrabold font-['Outfit']">
                Cómo Jugar en Pareja
              </h3>
              <p className={`text-[11px] ${textMuted}`}>Guía rápida para divertirse al máximo</p>
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

        {/* Content */}
        <div className="p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
          <div
            className={`p-3.5 rounded-2xl border space-y-1.5 ${
              isBlush ? 'bg-rose-50/50 border-rose-100' : 'bg-[#25172e]/60 border-[#3b2548]'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-rose-500">
              <Smartphone className="w-4 h-4" />
              <span>1. Un solo móvil compartido (Pass &amp; Play)</span>
            </div>
            <p className={textMuted}>
              Siéntense juntos o abrácense: responde uno su turno, ríen con el dato curioso y le pasan el teléfono al otro.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-2xl border space-y-1.5 ${
              isBlush ? 'bg-amber-50/50 border-amber-100' : 'bg-[#2a1d29]/60 border-amber-500/20'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-amber-500">
              <Clock className="w-4 h-4" />
              <span>2. Tiempo &amp; Bono de Agilidad</span>
            </div>
            <p className={textMuted}>
              Cada acierto da 100 puntos base. Si respondes en los primeros segundos recibes hasta <strong>+50 puntos de velocidad</strong>.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-2xl border space-y-1.5 ${
              isBlush ? 'bg-pink-50/50 border-pink-100' : 'bg-[#27152f]/60 border-pink-500/20'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-pink-500">
              <Flame className="w-4 h-4" />
              <span>3. Rachas de Amor y Fuego</span>
            </div>
            <p className={textMuted}>
              Encadenen respuestas correctas consecutivas para desbloquear multiplicadores y subir en el ranking mundial de parejas.
            </p>
          </div>

          <div
            className={`p-3.5 rounded-2xl border space-y-1.5 ${
              isBlush ? 'bg-emerald-50/50 border-emerald-100' : 'bg-[#182725]/60 border-emerald-500/20'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-emerald-600">
              <Award className="w-4 h-4" />
              <span>4. El Pacto de Pareja</span>
            </div>
            <p className={textMuted}>
              Quien pierda debe cumplir la promesa acordada: masajes, cocinar, invitar las baleadas o preparar el desayuno.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`p-3.5 border-t text-center ${
            isBlush ? 'bg-rose-50/50 border-rose-100' : 'bg-[#180f1f] border-[#321f3f]'
          }`}
        >
          <button
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold text-xs shadow-md shadow-rose-300/30 cursor-pointer"
          >
            ¡Entendido, vamos a jugar!
          </button>
        </div>
      </div>
    </div>
  );
};
