import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, X, Lightbulb } from 'lucide-react';

interface CuriousFactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FactItem {
  id: string;
  category: 'word' | 'honduras' | 'math';
  title: string;
  subtitle: string;
  description: string;
  curiosity: string;
  tag: string;
}

const CURIOUS_ITEMS: FactItem[] = [
  {
    id: 'f-1',
    category: 'word',
    title: 'Petricor',
    subtitle: 'Sustantivo masculino',
    description: 'El característico y agradable olor que desprende la tierra seca al recibir las primeras gotas de lluvia fresca.',
    curiosity: 'Acuñado en 1964 por Isabel Bear y R. G. Thomas. Proviene del griego petros ("piedra") e icor ("sangre de los dioses mitológicos"). Ocurre cuando un aceite botánico en el suelo se combina con una molécula bacteriana llamada geosmina.',
    tag: 'Léxico Poético'
  },
  {
    id: 'f-2',
    category: 'word',
    title: 'Inefable',
    subtitle: 'Adjetivo',
    description: 'Que no se puede explicar, definir ni determinar con palabras humanas ordinarias debido a su inmensidad o sublimidad.',
    curiosity: 'Del latín ineffabilis. En literatura del amor y mística se reserva para sentimientos que sobrepasan cualquier diccionario.',
    tag: 'Léxico Poético'
  },
  {
    id: 'f-3',
    category: 'word',
    title: 'Serendipia',
    subtitle: 'Sustantivo femenino',
    description: 'Hallazgo afortunado, valioso e inesperado que se produce de manera accidental cuando se estaba buscando otra cosa distinta.',
    curiosity: 'Inspirado en el antiguo cuento persa "Los tres príncipes de Serendip" (Sri Lanka). La penicilina, el microondas y el post-it fueron famosas serendipias históricas.',
    tag: 'Léxico Curioso'
  },
  {
    id: 'f-4',
    category: 'word',
    title: 'Limerencia',
    subtitle: 'Concepto psicológico y literario',
    description: 'El estado mental involuntario de intensa atracción romántica y obsesiva hacia otra persona, con mariposas constantes en el estómago.',
    curiosity: 'Acuñado por la psicóloga Dorothy Tennov en 1979. Durante este estado, el cerebro segrega cócteles de dopamina, norepinefrina y serotonina iguales a los de una montaña rusa de adrenalina.',
    tag: 'Amor & Mente'
  },
  {
    id: 'f-5',
    category: 'word',
    title: 'Nefelibata',
    subtitle: 'Adjetivo / Sustantivo',
    description: 'Dicho de una persona soñadora e idealista que vive en las nubes y no se somete a las convenciones terrenales.',
    curiosity: 'Del griego nephele ("nube") y bates ("el que camina"). Popularizado por el gran poeta nicaragüense Rubén Darío.',
    tag: 'Literatura'
  },
  {
    id: 'f-6',
    category: 'honduras',
    title: 'El Reloj de Comayagua (~1100 d.C.)',
    subtitle: 'Patrimonio Histórico Mundial',
    description: 'El reloj de engranajes mecánicos en funcionamiento continuo más antiguo de América y el segundo más antiguo del planeta Tierra.',
    curiosity: 'Fue forjado en Granada (España) por los moros hacia el año 1100. Donado a Comayagua por el rey Felipe III. ¡Sus pesas son bloques de piedra labrada suspendidos por cuerdas!',
    tag: 'Historia Catracha'
  },
  {
    id: 'f-7',
    category: 'honduras',
    title: 'Origen del término "Catracho"',
    subtitle: 'Identidad y Hermandad Nacional',
    description: 'El gentilicio popular y de enorme orgullo que identifica a los hondureños en cualquier rincón del mundo.',
    curiosity: 'Rinde homenaje al valiente general Florencio Xatruch, quien lideró tropas hondureñas contra William Walker en 1856. Sus aliados nicaragüenses decían con cariño y admiración: "ahí vienen los xatruches", que derivó fonéticamente en catrachos.',
    tag: 'Orgullo Nacional'
  },
  {
    id: 'f-8',
    category: 'honduras',
    title: 'La Escalinata de Copán Ruinas',
    subtitle: 'La Joya Maya de América',
    description: 'El texto jeroglífico maya grabado en piedra más extenso de Mesoamérica, con más de 2,200 glifos tallados en 1,250 bloques.',
    curiosity: 'Narra la crónica de 16 reyes de la dinastía de Copán fundada en 426 d.C. por K\'inich Yax K\'uk\' Mo\'. Declarado Patrimonio Mundial por la UNESCO en 1980.',
    tag: 'Arqueología Maya'
  },
  {
    id: 'f-9',
    category: 'math',
    title: 'La Simetría de los Porcentajes',
    subtitle: 'Atajo de Cálculo Mental',
    description: '¿Por qué calcular el 4% de 75 es fácil? Porque x% de y es exactamente igual a y% de x.',
    curiosity: 'El 4% de 75 es igual al 75% de 4. Como el 75% es tres cuartos (3/4), ¡tres cuartos de 4 es 3! Puedes usarlo para resolver operaciones instantáneamente frente a tu pareja.',
    tag: 'Truco Mental'
  },
  {
    id: 'f-10',
    category: 'math',
    title: 'La Trampa de los $1.10 del Bate y Pelota',
    subtitle: 'Sesgo Cognitivo del Sistema 1',
    description: 'Si un bate y una pelota cuestan $1.10 y el bate cuesta $1.00 más que la pelota, ¿por qué la pelota no vale 10 centavos?',
    curiosity: 'Porque si la pelota costara $0.10, el bate costaría $1.10 ($1 más) y la suma daría $1.20. La respuesta matemática exacta es 5 centavos ($1.05 + $0.05 = $1.10). Demuestra cómo el cerebro intuitivo prefiere atajos antes que comprobar.',
    tag: 'Lógica Cognitiva'
  }
];

export const CuriousFactModal: React.FC<CuriousFactModalProps> = ({ isOpen, onClose }) => {
  const { isBlush } = useTheme();
  const [filter, setFilter] = useState<'all' | 'word' | 'honduras' | 'math'>('all');

  if (!isOpen) return null;

  const filtered = CURIOUS_ITEMS.filter((item) => (filter === 'all' ? true : item.category === filter));

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
            <div className="w-8 h-8 rounded-2xl bg-purple-400/20 border border-purple-300 flex items-center justify-center text-purple-500">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold font-['Outfit']">
                Curiosidades &amp; Palabras Hermosas
              </h3>
              <p className={`text-[11px] ${textMuted}`}>Etimologías, secretos de Honduras y trucos</p>
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

        {/* Category Filters */}
        <div
          className={`px-4 py-2 border-b flex gap-1.5 overflow-x-auto no-scrollbar ${
            isBlush ? 'bg-rose-50/30 border-rose-100' : 'bg-[#180f1f]/40 border-[#321f3f]'
          }`}
        >
          {[
            { id: 'all', label: 'Todo' },
            { id: 'word', label: '📚 Palabras Poéticas' },
            { id: 'honduras', label: '🇭🇳 Historia Catracha' },
            { id: 'math', label: '🔢 Trucos de Mente' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                sound.playTap();
                setFilter(tab.id as any);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-sm'
                  : isBlush
                  ? 'bg-white text-slate-600 hover:bg-rose-50 border border-rose-100'
                  : 'bg-[#25172e] text-rose-200/70 hover:text-white border border-[#3b2548]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* List of items */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border space-y-2 transition-all ${
                isBlush
                  ? 'bg-rose-50/40 border-rose-100 hover:border-rose-200'
                  : 'bg-[#25172e]/60 border-[#3b2548]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 bg-rose-100/70 px-2 py-0.5 rounded-full border border-rose-200/60">
                  {item.tag}
                </span>
                <span className={`text-[11px] italic ${textMuted}`}>{item.subtitle}</span>
              </div>

              <div>
                <h4 className={`text-base font-bold font-['Outfit'] ${textPrimary}`}>{item.title}</h4>
                <p className={`text-xs leading-relaxed mt-0.5 ${textPrimary} opacity-90`}>{item.description}</p>
              </div>

              <div
                className={`p-3 rounded-xl text-[11px] flex items-start gap-2 leading-relaxed ${
                  isBlush ? 'bg-amber-50/80 border border-amber-200/70 text-amber-900' : 'bg-[#2c1d29] border border-amber-500/20 text-amber-200'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{item.curiosity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`p-3 border-t text-center text-[11px] ${
            isBlush ? 'bg-rose-50/50 border-rose-100 text-slate-500' : 'bg-[#180f1f] border-[#321f3f] text-rose-300/60'
          }`}
        >
          ¡Aprender juntos crea los recuerdos más hermosos de una pareja!
        </div>
      </div>
    </div>
  );
};
