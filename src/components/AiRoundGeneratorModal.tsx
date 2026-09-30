import React, { useState } from 'react';
import { Question } from '../types/game';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';
import { Bot, Sparkles, X, Loader2, AlertCircle } from 'lucide-react';

interface AiRoundGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuestionsGenerated: (questions: Question[]) => void;
}

export const AiRoundGeneratorModal: React.FC<AiRoundGeneratorModalProps> = ({
  isOpen,
  onClose,
  onQuestionsGenerated,
}) => {
  const { isBlush } = useTheme();
  const [topicType, setTopicType] = useState<'honduras' | 'grammar' | 'math' | 'general' | 'custom'>('honduras');
  const [customPrompt, setCustomPrompt] = useState('');
  const [count, setCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    sound.playTap();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/generate-round', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: topicType === 'custom' ? 'general' : topicType,
          customTopic: topicType === 'custom' ? customPrompt : undefined,
          count: count,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.questions || data.questions.length === 0) {
        throw new Error(data.error || 'No se pudieron generar las preguntas con IA');
      }

      sound.playCorrect();
      onQuestionsGenerated(data.questions);
      onClose();
    } catch (err: any) {
      console.error(err);
      sound.playWrong();
      setErrorMsg(
        err.message || 'Error al conectar con la IA. Pueden seguir jugando con el banco integrado de preguntas.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const cardBg = isBlush
    ? 'bg-white border-purple-100 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)] text-slate-800'
    : 'bg-[#1e1425] border-[#432555] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] text-rose-50';

  const textPrimary = isBlush ? 'text-slate-800' : 'text-rose-50';
  const textMuted = isBlush ? 'text-slate-500' : 'text-rose-200/70';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`w-full max-w-md border rounded-3xl shadow-2xl overflow-hidden flex flex-col ${cardBg}`}>
        {/* Header */}
        <div
          className={`p-4 border-b flex items-center justify-between ${
            isBlush ? 'bg-purple-50/60 border-purple-100' : 'bg-[#180f1f]/80 border-[#321f3f]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-2xl bg-purple-400/20 border border-purple-300 flex items-center justify-center text-purple-600">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold font-['Outfit']">
                Generador de Preguntas con IA
              </h3>
              <p className={`text-[11px] ${textMuted}`}>Crea retos infinitos a su medida</p>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playTap();
              onClose();
            }}
            className={`w-8 h-8 rounded-2xl flex items-center justify-center transition-colors cursor-pointer ${
              isBlush ? 'bg-white hover:bg-purple-100 text-slate-500' : 'bg-[#291c33] text-rose-300 hover:text-white'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <label className={`text-xs font-bold ${textPrimary}`}>
              ¿Sobre qué tema desean jugar esta ronda?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'honduras', label: '🇭🇳 Historia de Honduras profunda' },
                { id: 'grammar', label: '📚 Palabras curiosas & Poesía' },
                { id: 'math', label: '🔢 Acertijos matemáticos de ingenio' },
                { id: 'general', label: '🌍 Cultura Pop & Descubrimientos' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => {
                    sound.playTap();
                    setTopicType(btn.id as any);
                  }}
                  className={`p-3 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                    topicType === btn.id
                      ? isBlush
                        ? 'bg-purple-50 border-purple-300 text-purple-900 shadow-sm'
                        : 'bg-purple-500/20 border-purple-500 text-purple-200'
                      : isBlush
                      ? 'bg-purple-50/20 border-purple-100 text-slate-600 hover:bg-purple-50/60'
                      : 'bg-[#25172e] border-[#3b2548] text-rose-200/70 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                sound.playTap();
                setTopicType('custom');
              }}
              className={`w-full p-3 rounded-2xl border text-xs font-semibold transition-all text-left cursor-pointer ${
                topicType === 'custom'
                  ? isBlush
                    ? 'bg-rose-50 border-rose-300 text-rose-900'
                    : 'bg-rose-500/20 border-rose-500 text-rose-200'
                  : isBlush
                  ? 'bg-purple-50/20 border-purple-100 text-slate-600 hover:bg-purple-50/60'
                  : 'bg-[#25172e] border-[#3b2548] text-rose-200/70'
              }`}
            >
              ✍️ Tema totalmente personalizado (ustedes eligen)
            </button>

            {topicType === 'custom' && (
              <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Ej: Mitología maya, leyendas hondureñas, gastronomía caribeña..."
                className={`w-full rounded-2xl px-3.5 py-2.5 text-xs font-medium border focus:outline-none transition-all ${
                  isBlush
                    ? 'bg-white border-rose-300 text-slate-800 placeholder-slate-400'
                    : 'bg-[#1b1324] border-rose-500/60 text-rose-100 placeholder-rose-300/40'
                }`}
              />
            )}
          </div>

          {/* Question Count */}
          <div className="space-y-1.5">
            <label className={`text-xs font-bold flex items-center justify-between ${textPrimary}`}>
              <span>Cantidad de preguntas:</span>
              <span className="font-mono text-purple-600 font-bold">{count} preguntas</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[4, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    sound.playTap();
                    setCount(num);
                  }}
                  className={`py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    count === num
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-300/30'
                      : isBlush
                      ? 'bg-purple-50/30 border border-purple-100 text-slate-600 hover:bg-purple-50/70'
                      : 'bg-[#25172e] border border-[#3b2548] text-rose-200/70'
                  }`}
                >
                  {num} preguntas ({num / 2} por jugador)
                </button>
              ))}
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Action button */}
          <button
            type="button"
            disabled={isLoading}
            onClick={handleGenerate}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold text-sm shadow-lg shadow-purple-300/30 hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 font-['Outfit']"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Generando desafíos con IA...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>¡Generar Desafíos Ahora!</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
