import { Question } from '../types/game';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // HISTORIA Y ORGULLO DE HONDURAS 🇭🇳
  // ==========================================
  {
    id: 'hn-1',
    category: 'honduras',
    question: '¿En qué año y lugar fue fusilado el prócer general Francisco Morazán?',
    options: [
      '1842 en San José, Costa Rica',
      '1821 en Tegucigalpa, Honduras',
      '1830 en Ciudad de Guatemala',
      '1856 en San Salvador, El Salvador'
    ],
    correctAnswerIndex: 0,
    explanation: 'Francisco Morazán fue fusilado el 15 de septiembre de 1842 en San José, Costa Rica, exactamente 21 años después de la independencia de Centroamérica.',
    curiousFact: 'Antes de morir, Morazán dirigió él mismo su propio pelotón de fusilamiento diciendo: "¡Preparen, apunten... fuego!". En su testamento declaró su amor incondicional a la unión de Centroamérica.',
    difficulty: 'medio'
  },
  {
    id: 'hn-2',
    category: 'honduras',
    question: '¿Cuál es el origen histórico de la palabra "Catracho" para referirse a los hondureños?',
    options: [
      'Del general Florencio Xatruch y sus valientes tropas',
      'De una tribu indígena extinta de la costa caribeña',
      'De una variedad de cacao cultivada en Comayagua',
      'De un vocablo náhuatl que significa "gente del río"'
    ],
    correctAnswerIndex: 0,
    explanation: 'Proviene del general Florencio Xatruch, héroe hondureño que combatió al filibustero William Walker en Nicaragua en 1856. A sus tropas se les decía "los xatruches" y derivó en "catrachos".',
    curiousFact: 'Los nicaragüenses no podían pronunciar fácilmente el apellido catalán "Xatruch" y decían "los chatruches" o "catruches", término que con el tiempo se transformó con orgullo en "catrachos".',
    difficulty: 'facil'
  },
  {
    id: 'hn-3',
    category: 'honduras',
    question: '¿Qué maravilla arqueológica de Copán Ruinas tiene el texto jeroglífico maya grabado en piedra más largo de toda América?',
    options: [
      'La Escalinata de los Jeroglíficos',
      'El Altar Q',
      'El Templo de Rosalila',
      'El Juego de Pelota Mayor'
    ],
    correctAnswerIndex: 0,
    explanation: 'La Escalinata de los Jeroglíficos contiene más de 1,250 bloques tallados con 2,200 glifos que narran la historia dinástica de Copán.',
    curiousFact: 'Fue construida bajo el reinado de K\'ak\' Yipyaj Chan K\'awiil (gobernante 15) para glorificar la dinastía que inició K\'inich Yax K\'uk\' Mo\' en el 426 d.C.',
    difficulty: 'medio'
  },
  {
    id: 'hn-4',
    category: 'honduras',
    question: '¿En qué ciudad de Honduras se encuentra funcionando el reloj de engranajes mecánicos más antiguo de toda América?',
    options: [
      'Comayagua',
      'Gracias, Lempira',
      'Tegucigalpa',
      'Santa Rosa de Copán'
    ],
    correctAnswerIndex: 0,
    explanation: 'El reloj de la Catedral de la Inmaculada Concepción de Comayagua fue construido alrededor del año 1100 d.C. en Granada (España) por los moros.',
    curiousFact: 'El rey Felipe III donó este reloj a la noble ciudad de Comayagua en el siglo XVII. Su mecanismo funciona con pesas de piedra y engranajes de hierro forjado sin un solo tornillo moderno.',
    difficulty: 'facil'
  },
  {
    id: 'hn-5',
    category: 'honduras',
    question: '¿Cómo se llamó el cacique lenca que resistió heroicamente a los conquistadores españoles en el Peñón de Cerquín?',
    options: [
      'Lempira',
      'Copán Galel',
      'Benito',
      'Mazatl'
    ],
    correctAnswerIndex: 0,
    explanation: 'El cacique Lempira reunió a más de 30,000 indígenas de unas doscientas aldeas lencas para resistir la invasión española liderada por Alonso de Cáceres.',
    curiousFact: 'En lengua lenca, "Lempira" proviene de "Lempa" (Señor) y "Era" (Cerro o Sierra), significando "Señor de la Sierra". Su muerte fue documentada tanto por crónicas españolas como por la Probanza de Méritos de Rodrigo Ruiz.',
    difficulty: 'facil'
  },
  {
    id: 'hn-6',
    category: 'honduras',
    question: '¿Qué fenómeno meteorológico único e insólito ocurre anualmente en el departamento de Yoro?',
    options: [
      'La Lluvia de Peces',
      'El Relámpago silencioso de Catacamas',
      'La Nieve de Guajiquiro',
      'El Fuego fatuo del Guayape'
    ],
    correctAnswerIndex: 0,
    explanation: 'La Lluvia de Peces de Yoro es un fenómeno legendario que ocurre entre mayo y julio donde caen peces vivos de agua dulce tras fuertes tormentas eléctricas.',
    curiousFact: 'Los pobladores locales atribuyen este milagro a las oraciones del padre español José Manuel de Subirana en 1858, quien rezó durante tres días pidiendo comida para los campesinos pobres.',
    difficulty: 'facil'
  },
  {
    id: 'hn-7',
    category: 'honduras',
    question: '¿Cuál es la fortaleza militar colonial de origen español más grande de Centroamérica, ubicada en la costa caribeña de Honduras?',
    options: [
      'Fortaleza de San Fernando de Omoa',
      'Fuerte de San Cristóbal',
      'Fuerte de Santa Bárbara en Trujillo',
      'Castillo de San Felipe'
    ],
    correctAnswerIndex: 0,
    explanation: 'La Fortaleza de San Fernando de Omoa fue construida en el siglo XVIII entre 1756 y 1775 para defender el comercio contra corsarios y piratas ingleses.',
    curiousFact: 'Sus gruesos muros se construyeron con una mezcla de piedra, cal, arena y clara de huevo combinada con conchas marinas para resistir la salinidad y los cañonazos.',
    difficulty: 'medio'
  },
  {
    id: 'hn-8',
    category: 'honduras',
    question: '¿Cuál es el único lago natural de origen volcánico en Honduras?',
    options: [
      'Lago de Yojoa',
      'Laguna de Caratasca',
      'Laguna de Guaimoreto',
      'Laguna de Ticamaya'
    ],
    correctAnswerIndex: 0,
    explanation: 'El Lago de Yojoa tiene una superficie de 79 km² y se encuentra rodeado por el Parque Nacional Cerro Azul Meámbar y Santa Bárbara.',
    curiousFact: 'En el Lago de Yojoa habitan más de 500 especies de aves (el 55% de todas las aves de Honduras), convirtiéndolo en un paraíso mundial del aviturismo.',
    difficulty: 'facil'
  },
  {
    id: 'hn-9',
    category: 'honduras',
    question: '¿Quién redactó el Acta de Independencia de Centroamérica el 15 de septiembre de 1821?',
    options: [
      'José Cecilio del Valle',
      'Dionisio de Herrera',
      'Francisco Morazán',
      'José Trinidad Cabañas'
    ],
    correctAnswerIndex: 0,
    explanation: 'José Cecilio del Valle, conocido como "El Sabio Valle", redactó con gran maestría jurídica y política el Acta de Independencia en el Palacio Real de Guatemala.',
    curiousFact: 'A pesar de haber redactado el acta con reservas por la falta de preparación inmediata del pueblo, fue electo en 1834 como Presidente Federal de Centroamérica, aunque falleció antes de tomar posesión.',
    difficulty: 'medio'
  },
  {
    id: 'hn-10',
    category: 'honduras',
    question: '¿Qué templo maya de Copán fue encontrado intacto debajo de la Pirámide 16, conservando todos sus colores originales estucados?',
    options: [
      'Templo Rosalila',
      'Templo de las Inscripciones',
      'El Caracol',
      'Templo del Sol Verde'
    ],
    correctAnswerIndex: 0,
    explanation: 'El Templo Rosalila fue descubierto en 1989 por el arqueólogo hondureño Ricardo Agurcia Fasquelle gracias a un sistema de túneles de exploración.',
    curiousFact: 'Los mayas enterraron a Rosalila con sumo cuidado y respeto ritual, cubriéndolo completamente con un fino yeso blanco en lugar de destruirlo como solían hacer al construir pirámides nuevas.',
    difficulty: 'medio'
  },
  {
    id: 'hn-11',
    category: 'honduras',
    question: '¿Cuál es la flor nacional de Honduras desde el año 1969?',
    options: [
      'La Orquídea Rhyncholaelia digbyana',
      'La Rosa de Montaña',
      'La Dalia Silvestre',
      'La Flor de Izote'
    ],
    correctAnswerIndex: 0,
    explanation: 'La orquídea autóctona Rhyncholaelia digbyana (antes clasificada como Brassavola digbyana) fue declarada Flor Nacional el 25 de noviembre de 1969.',
    curiousFact: 'Antes de 1969, la flor nacional de Honduras era la Rosa ordinaria, pero fue reemplazada por la orquídea al ser una flor endémica que simboliza la excepcional belleza virgen de la flora hondureña.',
    difficulty: 'facil'
  },
  {
    id: 'hn-12',
    category: 'honduras',
    question: '¿En qué año se instituyó el Lempira como la moneda oficial de Honduras, reemplazando al peso de plata?',
    options: [
      '1931',
      '1821',
      '1900',
      '1950'
    ],
    correctAnswerIndex: 0,
    explanation: 'El Lempira se creó mediante el Decreto Legislativo No. 102 del 3 de abril de 1926 y comenzó a circular formalmente como moneda nacional en 1931.',
    curiousFact: 'En un principio, la moneda de un lempira contenía 12.5 gramos de plata con una pureza de 0.900, por lo que muchos campesinos las guardaban como tesoro en alcancías de barro.',
    difficulty: 'dificil'
  },
  {
    id: 'hn-13',
    category: 'honduras',
    question: '¿Cuál es el punto geográfico más alto de toda Honduras sobre el nivel del mar?',
    options: [
      'Cerro Las Minas en Celaque (2,870 msnm)',
      'Pico Bonito en La Ceiba (2,435 msnm)',
      'Cerro Santa Bárbara (2,744 msnm)',
      'Pico Pijol en Yoro (2,282 msnm)'
    ],
    correctAnswerIndex: 0,
    explanation: 'El Cerro Las Minas, ubicado en el Parque Nacional Montaña de Celaque en el departamento de Lempira, se eleva a 2,870 metros sobre el nivel del mar.',
    curiousFact: 'La palabra "Celaque" proviene del vocablo lenca que significa "Caja de agua", debido a los más de 11 ríos caudalosos que nacen de sus cumbres cubiertas de bosque nublado.',
    difficulty: 'medio'
  },
  {
    id: 'hn-14',
    category: 'honduras',
    question: '¿En qué ciudad caribeña de Honduras fue capturado y fusilado el invasor estadounidense William Walker en 1860?',
    options: [
      'Trujillo',
      'Puerto Cortés',
      'La Ceiba',
      'Guanaja'
    ],
    correctAnswerIndex: 0,
    explanation: 'William Walker fue entregado a las autoridades hondureñas por el comandante naval británico Norvell Salmon y fusilado frente al mar en Trujillo el 12 de septiembre de 1860.',
    curiousFact: 'Su tumba aún se encuentra en el cementerio viejo de Trujillo, convertida en un testimonio histórico del fracaso del filibusterismo esclavista en Centroamérica.',
    difficulty: 'medio'
  },
  {
    id: 'hn-15',
    category: 'honduras',
    question: '¿Qué emblemático plato típico hondureño nació en la costa norte y consiste en una tortilla de harina con frijoles fritos, queso y mantequilla?',
    options: [
      'La Baleada',
      'El Ticuco',
      'El Nacatamal',
      'La Catracha'
    ],
    correctAnswerIndex: 0,
    explanation: 'La baleada es la joya gastronómica catracha por excelencia, nacida en los campos bananeros de la costa norte hondureña (La Ceiba / El Progreso).',
    curiousFact: 'Cuenta la leyenda popular de La Ceiba que doña Teresa vendía tortillas cerca de la línea del tren; tras sobrevivir a un tiroteo, la gente decía: "vamos a comer donde la baleada". ¡Hoy es el desayuno predilecto de millones!',
    difficulty: 'facil'
  },
  {
    id: 'hn-16',
    category: 'honduras',
    question: '¿En qué histórica batalla de 1827 Francisco Morazán demostró por primera vez su genialidad militar al frente del Ejército Aliado Protector de la Ley?',
    options: [
      'La Batalla de La Trinidad',
      'La Batalla de Gualcho',
      'La Batalla de Las Charcas',
      'La Batalla del Espíritu Santo'
    ],
    correctAnswerIndex: 0,
    explanation: 'El 11 de noviembre de 1827, Morazán venció a las tropas federales del coronel Justo Milla en Sabanagrande, consagrándose como líder libertador.',
    curiousFact: 'Tras la victoria de La Trinidad, Morazán marchó triunfalmente a Tegucigalpa y luego hacia Guatemala, consolidando la República Federal de Centroamérica.',
    difficulty: 'medio'
  },
  {
    id: 'hn-17',
    category: 'honduras',
    question: '¿Qué reserva biológica de Honduras fue declarada Patrimonio Mundial por la UNESCO en 1982 por albergar selvas vírgenes y vestigios arqueológicos como la Ciudad Blanca?',
    options: [
      'Reserva de la Biosfera del Río Plátano',
      'Parque Nacional Pico Bonito',
      'Refugio de Vida Silvestre Cuero y Salado',
      'Parque Nacional La Tigra'
    ],
    correctAnswerIndex: 0,
    explanation: 'La Reserva del Río Plátano en La Mosquitia protege más de 5,000 km² de selva tropical, habitada por comunidades indígenas misquitas y pech.',
    curiousFact: 'En 2015, expediciones científicas y de National Geographic confirmaron mediante tecnología LiDAR los restos de asentamientos milenarios ocultos bajo la densa jungla de esta reserva.',
    difficulty: 'medio'
  },
  {
    id: 'hn-18',
    category: 'honduras',
    question: '¿Quién fue el primer Jefe de Estado de Honduras en 1824 y redactor de su primera Constitución Política?',
    options: [
      'Dionisio de Herrera',
      'José Trinidad Reyes',
      'Marco Aurelio Soto',
      'Policarpo Bonilla'
    ],
    correctAnswerIndex: 0,
    explanation: 'Dionisio de Herrera asumió la jefatura del Estado el 16 de septiembre de 1824, organizó el primer escudo nacional y decretó la primera división departamental.',
    curiousFact: 'Herrera era primo de Francisco Morazán y fue su gran mentor intelectual en su juventud, prestándole libros de la Ilustración francesa traídos clandestinamente.',
    difficulty: 'medio'
  },
  {
    id: 'hn-19',
    category: 'honduras',
    question: '¿Qué famosa catarata de 43 metros de altura, ubicada cerca del Lago de Yojoa, se dice que inspiró escenarios de la película "El libro de la selva"?',
    options: [
      'Cataratas de Pulhapanzak',
      'Cascada de Río Cangrejal',
      'El Salto de Río Amarillo',
      'Cascada de Zacate Grande'
    ],
    correctAnswerIndex: 0,
    explanation: 'Pulhapanzak es una impresionante caída de agua del río Lindo, rodeada de senderos y cuevas ocultas detrás del torrente de agua.',
    curiousFact: 'La palabra "Pulhapanzak" proviene de una antigua voz indígena que significa "Rebote o caída del agua blanca". En sus alrededores hay vestigios de un centro ceremonial maya preclásico.',
    difficulty: 'facil'
  },
  {
    id: 'hn-20',
    category: 'honduras',
    question: '¿Cómo se llama el archipiélago de dos pequeñas islas y 13 cayos de aguas cristalinas coralinas protegido entre La Ceiba y Roatán?',
    options: [
      'Cayos Cochinos',
      'Islas del Cisne',
      'Cayos Zapotillos',
      'Cayos Vivorillo'
    ],
    correctAnswerIndex: 0,
    explanation: 'El Monumento Natural Marino Cayos Cochinos es reconocido internacionalmente por sus arrecifes prístinos y albergar la boa rosada endémica.',
    curiousFact: 'La famosa boa rosada de Cayos Cochinos no existe en ningún otro rincón del planeta Tierra. Debido a su aislamiento genético, desarrolló un color pálido rosáceo único.',
    difficulty: 'facil'
  },

  // ==========================================
  // GRAMÁTICA, RETO LÉXICO Y DATOS CURIOSOS 📚
  // ==========================================
  {
    id: 'gr-1',
    category: 'grammar',
    question: '¿Cuál es el significado de la hermosa palabra "PETRICOR"?',
    options: [
      'El olor agradable que desprende la tierra al llover',
      'El brillo dorado del atardecer sobre las montañas',
      'El sonido de las hojas secas cuando crujen al pisarlas',
      'El miedo profundo a los truenos y tempestades'
    ],
    correctAnswerIndex: 0,
    explanation: 'Petricor describe el olor a lluvia fresca sobre tierra seca.',
    curiousFact: 'El término fue acuñado en 1964 por dos químicos australianos, Isabel Bear y R. G. Thomas. Proviene del griego "petra" (piedra) e "ikhôr" (el fluido dorado que corría por las venas de los dioses en la mitología griega).',
    difficulty: 'facil'
  },
  {
    id: 'gr-2',
    category: 'grammar',
    question: '¿Qué significa la palabra poética "INEFABLE"?',
    options: [
      'Que no se puede explicar o describir con palabras',
      'Que nunca tendrá un final o desenlace',
      'Que carece de defectos o imperfecciones',
      'Que causa una gran tristeza en el alma'
    ],
    curiousFact: 'Proviene del latín "ineffabilis" (in- prefijo de negación y effabilis "decible", de effari "hablar"). En literatura se usa para el amor supremo o las experiencias místicas que sobrepasan el lenguaje humano.',
    correctAnswerIndex: 0,
    explanation: 'Inefable es aquello tan sublime o extraordinario que resulta imposible poner en palabras.',
    difficulty: 'facil'
  },
  {
    id: 'gr-3',
    category: 'grammar',
    question: 'En el dialecto y hondureñismo tradicional, ¿qué significa decirle a alguien que es tu "ALERO"?',
    options: [
      'Tu amigo inseparable, camarada o cómplice de confianza',
      'Una persona que habla con voz muy aguda',
      'Alguien que llega siempre tarde a las reuniones',
      'Un pariente lejano por vía materna'
    ],
    correctAnswerIndex: 0,
    explanation: 'En Honduras, "alero" es el mejor amigo o compañero de aventuras.',
    curiousFact: 'La metáfora proviene del "alero" de las casas coloniales: la parte del techo que sobresale y da cobijo y sombra a quien se para debajo para protegerse de la lluvia y el sol implacable.',
    difficulty: 'facil'
  },
  {
    id: 'gr-4',
    category: 'grammar',
    question: '¿Qué palabra define el estado mental de serenidad absoluta e imperturbabilidad ante las dificultades?',
    options: [
      'Ataraxia',
      'Melomanía',
      'Eutrapelia',
      'Xenofilia'
    ],
    correctAnswerIndex: 0,
    explanation: 'La ataraxia fue el ideal supremo de felicidad para las escuelas de filosofía estoica, epicúrea y escéptica en la antigua Grecia.',
    curiousFact: 'Los médicos de la antigua Grecia usaban el término para describir a soldados que conservaban la calma glacial en pleno fragor de la batalla.',
    difficulty: 'medio'
  },
  {
    id: 'gr-5',
    category: 'grammar',
    question: '¿Cuál es la forma ortográfica y gramaticalmente correcta de conjugar el verbo "andar" en tercera persona del pasado?',
    options: [
      'Él anduvo',
      'Él andó',
      'Él andaba de una vez',
      'Él anduviese solamente'
    ],
    correctAnswerIndex: 0,
    explanation: 'El verbo "andar" es irregular en el pretérito perfecto simple: anduve, anduviste, anduvo, anduvimos, anduvieron.',
    curiousFact: 'El error popular de decir "andó" ocurre por un fenómeno lingüístico llamado analogía regularizante, donde nuestro cerebro intenta aplicar la terminación de verbos regulares como "cantar -> cantó".',
    difficulty: 'medio'
  },
  {
    id: 'gr-6',
    category: 'grammar',
    question: '¿Cuál es la diferencia entre "SEMPITERNO" y "ETERNO"?',
    options: [
      'Sempiterno tuvo un principio pero no tendrá fin; eterno no tiene ni principio ni fin',
      'Sempiterno dura sólo mil años; eterno dura para siempre',
      'Sempiterno es aplicable a personas y eterno sólo a objetos',
      'Sempiterno es una palabra ficticia de uso poético'
    ],
    correctAnswerIndex: 0,
    explanation: 'Lo eterno carece de principio y de fin (como Dios o el universo increado); lo sempiterno tuvo un momento de creación, pero perdurará infinitamente.',
    curiousFact: 'Por ejemplo, para los teólogos y poetas, el amor que nace entre dos personas puede llamarse "sempiterno", porque empezó el día en que se conocieron y perdura más allá del tiempo.',
    difficulty: 'medio'
  },
  {
    id: 'gr-7',
    category: 'grammar',
    question: '¿Qué significa el término psicológico y literario "LIMERENCIA"?',
    options: [
      'El estado mental involuntario de atracción romántica obsesiva e intensa',
      'El cansancio emocional tras una discusión de pareja',
      'La capacidad de olvidar viejos rencores con rapidez',
      'El deseo de viajar a lugares lejanos y solitarios'
    ],
    correctAnswerIndex: 0,
    explanation: 'La limerencia fue acuñada en 1979 por la psicóloga Dorothy Tennov en su libro "Amor y Limerencia".',
    curiousFact: 'Durante la limerencia, el cerebro libera torrentes masivos de dopamina y feniletilamina similares al efecto de una montaña rusa, creando mariposas en el estómago y pensamientos constantes en la pareja.',
    difficulty: 'medio'
  },
  {
    id: 'gr-8',
    category: 'grammar',
    question: '¿Qué figura retórica se encuentra en la frase: "Un silencio ensordecedor inundó la habitación"?',
    options: [
      'Oxímoron',
      'Pleonasmo',
      'Hipérbaton',
      'Metonimia'
    ],
    correctAnswerIndex: 0,
    explanation: 'El oxímoron combina dos conceptos de significado opuesto en una sola expresión para generar un nuevo sentido metafórico.',
    curiousFact: 'La misma palabra "oxímoron" es un oxímoron en griego antiguo: proviene de "oxys" (agudo, penetrante) y "moros" (tonto o estúpido), significando literalmente "agudamente estúpido".',
    difficulty: 'medio'
  },
  {
    id: 'gr-9',
    category: 'grammar',
    question: '¿Cuál de las siguientes oraciones contiene un uso INCORRECTO del verbo haber?',
    options: [
      'Habían más de cincuenta personas en la fiesta.',
      'Hubo muchas preguntas interesantes.',
      'Habrá una gran recompensa para el ganador.',
      'Ha habido bastantes dudas sobre el tema.'
    ],
    correctAnswerIndex: 0,
    explanation: 'El verbo haber como impersonal solo se conjuga en tercera persona singular: "Había más de cincuenta personas", nunca "Habían".',
    curiousFact: 'En las oraciones impersonales, "cincuenta personas" no es el sujeto, sino el objeto directo. Como no hay sujeto, el verbo jamás debe concordar en plural.',
    difficulty: 'medio'
  },
  {
    id: 'gr-10',
    category: 'grammar',
    question: '¿Qué significa la palabra "NEFELIBATA"?',
    options: [
      'Dicho de una persona soñadora que anda por las nubes y no se apercibe de la realidad',
      'Persona experta en la predicción del clima de alta montaña',
      'Aquel que siente fobia irracional a la niebla',
      'Un coleccionista de antigüedades marinas'
    ],
    correctAnswerIndex: 0,
    explanation: 'Nefelibata proviene del griego "nephele" (nube) y "bates" (el que anda o camina).',
    curiousFact: 'El gran poeta Rubén Darío popularizó este adjetivo en su poesía modernista para describir a los artistas de espíritu libre que viven en un mundo de ideas e imaginación.',
    difficulty: 'facil'
  },
  {
    id: 'gr-11',
    category: 'grammar',
    question: 'En Honduras, ¿a qué se refiere una persona cuando dice que algo quedó "MACANUDO"?',
    options: [
      'Quedó excelente, magnífico, perfecto y de gran calidad',
      'Quedó muy pesado o difícil de transportar',
      'Quedó roto o en mal estado',
      'Quedó demasiado condimentado con especias'
    ],
    correctAnswerIndex: 0,
    explanation: '"Macanudo" es un adjetivo hondureño y latinoamericano muy usado para elogiar algo sobresaliente o una situación favorable.',
    curiousFact: 'Originalmente hacía referencia a la "macana", arma ceremonial indígena de madera pesada de gran valor; con el tiempo pasó a significar algo fuerte, noble y formidable.',
    difficulty: 'facil'
  },
  {
    id: 'gr-12',
    category: 'grammar',
    question: '¿Cuál es la regla correcta para tildar la palabra "AÚN"?',
    options: [
      'Lleva tilde cuando equivale a "todavía", pero no cuando equivale a "incluso" o "hasta"',
      'Nunca lleva tilde porque es un monosílabo',
      'Siempre lleva tilde por regla general de acentuación',
      'Lleva tilde solo cuando inicia una pregunta'
    ],
    correctAnswerIndex: 0,
    explanation: 'Se escribe "aún" con tilde diacrítica cuando es sustituible por "todavía" ("Aún te amo"), y "aun" sin tilde cuando equivale a "incluso" ("Aun sin dinero, fue feliz").',
    curiousFact: 'La tilde en "aún" rompe el diptongo fonético (a-ún) convirtiéndolo en un hiato con dos sílabas audibles.',
    difficulty: 'medio'
  },
  {
    id: 'gr-13',
    category: 'grammar',
    question: '¿Qué significa la palabra "SERENDIPIA"?',
    options: [
      'Un descubrimiento o hallazgo afortunado, valioso e inesperado',
      'Una calma engañosa antes de una gran discusión',
      'El sentimiento de nostalgia por un lugar que nunca visitaste',
      'La habilidad de predecir el futuro en sueños'
    ],
    correctAnswerIndex: 0,
    explanation: 'Serendipia describe cuando encuentras algo maravilloso por casualidad mientras buscabas otra cosa diferente.',
    curiousFact: 'La palabra fue creada en 1754 por el escritor Horace Walpole, inspirado en el cuento persa "Los tres príncipes de Serendip" (antiguo nombre de Sri Lanka), cuyos héroes siempre hacían descubrimientos accidentales pero sagaces.',
    difficulty: 'facil'
  },
  {
    id: 'gr-14',
    category: 'grammar',
    question: 'En el hablar hondureño, ¿qué significa la palabra "CHIGÜÍN"?',
    options: [
      'Un niño pequeño, jovencito o criatura inquieta',
      'Un pan dulce tradicional con canela',
      'Una vasija de barro para guardar agua fría',
      'Un pájaro cantor del bosque nublado'
    ],
    correctAnswerIndex: 0,
    explanation: 'En Honduras se le dice con cariño "chigüín" o "chigüina" a los niños pequeños.',
    curiousFact: 'Proviene del vocablo lenca y náhuatl centroamericano para describir a los infantes de paso rápido y travieso que corren por las veredas.',
    difficulty: 'facil'
  },
  {
    id: 'gr-15',
    category: 'grammar',
    question: '¿Qué significa la palabra "EPIFANÍA"?',
    options: [
      'Una manifestación o revelación súbita e iluminadora de una verdad',
      'Un dolor de cabeza pasajero pero intenso',
      'Un poema dedicado exclusivamente a la naturaleza',
      'Una ceremonia de despedida antes de un largo viaje'
    ],
    correctAnswerIndex: 0,
    explanation: 'En filosofía y literatura, una epifanía es el instante mágico en que una persona comprende profundamente el sentido de algo que antes parecía confuso.',
    curiousFact: 'El novelista James Joyce usaba las epifanías como el clímax emocional de sus personajes: un objeto ordinario (como un reloj o una flor) de pronto les revelaba el misterio de la vida.',
    difficulty: 'medio'
  },
  {
    id: 'gr-16',
    category: 'grammar',
    question: '¿Cuál es el significado de la palabra "MELIFLUO"?',
    options: [
      'Un sonido o voz dulce, suave, delicada y melosa al oído',
      'Un líquido espeso difícil de disolver en agua',
      'Una persona que cambia de opinión con facilidad',
      'Una planta medicinal de aroma cítrico'
    ],
    correctAnswerIndex: 0,
    explanation: 'Melifluo proviene del latín "mel" (miel) y "fluere" (fluir): que fluye o destila miel por su dulzura y suavidad.',
    curiousFact: 'Se utiliza con frecuencia en la poesía romántica para elogiar la voz seductora del ser amado o la música armoniosa que acaricia los sentidos.',
    difficulty: 'medio'
  },
  {
    id: 'gr-17',
    category: 'grammar',
    question: 'En Honduras, ¿a qué le llaman popularmente una "TRUCHA" en la costa norte?',
    options: [
      'A una pequeña pulpería, tiendita o caseta de abarrotes de barrio',
      'A una trampa para pescar jaibas en el río',
      'A una broma pesada entre amigos',
      'A un camino estrecho lleno de curvas'
    ],
    correctAnswerIndex: 0,
    explanation: 'En la costa norte de Honduras (La Ceiba, Tela, San Pedro Sula), una trucha es una pulpería o ventecita de barrio.',
    curiousFact: 'El término surgió en la época de las compañías bananeras a principios del siglo XX, cuando los trabajadores compraban víveres en pequeñas casetas ambulantes llamadas en inglés "trucks" (camiones/carretones), españolizado luego a "truchas".',
    difficulty: 'facil'
  },
  {
    id: 'gr-18',
    category: 'grammar',
    question: '¿Qué es una "POTRA" en el léxico y pasión cotidiana catracha?',
    options: [
      'Un partido informal de fútbol callejero o en cancha comunitaria',
      'Una sopa espesa de mariscos y caracol',
      'Una pelea o discusión acalorada',
      'Una camioneta de carga antigua'
    ],
    correctAnswerIndex: 0,
    explanation: 'En Honduras "armar una potra" significa organizar un partido espontáneo de fútbol con los amigos, usando piedras o mochilas como postes de portería.',
    curiousFact: 'Las potras son el semillero histórico donde nacieron las más grandes leyendas del fútbol hondureño como "La Coneja" Cardona, Gilberto Yearwood, David Suazo y Carlos Pavón.',
    difficulty: 'facil'
  },

  // ==========================================
  // PROBLEMAS MATEMÁTICOS Y AGILIDAD MENTAL 🔢
  // ==========================================
  {
    id: 'ma-1',
    category: 'math',
    question: 'Un bate y una pelota de béisbol cuestan juntos $1.10. El bate cuesta $1.00 más que la pelota. ¿Cuánto cuesta la pelota?',
    options: [
      '$0.05 (5 centavos)',
      '$0.10 (10 centavos)',
      '$0.01 (1 centavo)',
      '$0.15 (15 centavos)'
    ],
    correctAnswerIndex: 0,
    explanation: 'Si la pelota cuesta $0.05, el bate cuesta $1.05 ($1.00 más que la pelota), y la suma da exactamente $1.10.',
    curiousFact: '¡Este es el acertijo cognitivo más famoso del Premio Nobel Daniel Kahneman! Más del 80% de los estudiantes de Harvard responden erróneamente 10 centavos porque el cerebro intuitivo busca la resta rápida sin verificar.',
    difficulty: 'facil'
  },
  {
    id: 'ma-2',
    category: 'math',
    question: '¿Cuánto es el 4% de 75?',
    options: [
      '3',
      '4.5',
      '2.8',
      '5'
    ],
    correctAnswerIndex: 0,
    explanation: 'Por la propiedad conmutativa de los porcentajes, el 4% de 75 es idéntico al 75% de 4. Las tres cuartas partes (75%) de 4 es 3.',
    curiousFact: '¡El truco maestro de los porcentajes! x% de y = y% de x. Calcular el 16% de 25 parece difícil de cabeza, pero calcular el 25% (la cuarta parte) de 16 es instantáneo: ¡4!',
    difficulty: 'medio'
  },
  {
    id: 'ma-3',
    category: 'math',
    question: 'Un caracol cae en un pozo de 10 metros de profundidad. Durante el día sube 3 metros, pero durante la noche resbala y desciende 2 metros. ¿En cuántos días saldrá del pozo?',
    options: [
      'En 8 días',
      'En 10 días',
      'En 7 días',
      'En 9 días'
    ],
    correctAnswerIndex: 0,
    explanation: 'Avanza 1 metro neto por día. Al terminar el día 7 está a 7 metros. En el día 8 sube 3 metros, alcanzando los 10 metros y saliendo antes de que llegue la noche.',
    curiousFact: 'El error común es pensar que al avanzar 1 metro por día tarda 10 días, olvidando que al llegar a la orilla durante el día ya no puede resbalar.',
    difficulty: 'medio'
  },
  {
    id: 'ma-4',
    category: 'math',
    question: 'Siguiendo la estricta jerarquía de operaciones matemáticas (PEMDAS), ¿cuál es el resultado de: 6 + 6 ÷ 6 + 6 × 6 - 6?',
    options: [
      '37',
      '66',
      '42',
      '31'
    ],
    correctAnswerIndex: 0,
    explanation: 'Primero divisiones y multiplicaciones: 6 ÷ 6 = 1 y 6 × 6 = 36. Luego sumas y restas: 6 + 1 + 36 - 6 = 37.',
    curiousFact: 'El acrónimo PEMDAS (Paréntesis, Exponentes, Multiplicación/División de izquierda a derecha, Suma/Resta) previene confusiones que han causado fallos en computadoras espaciales en la historia.',
    difficulty: 'facil'
  },
  {
    id: 'ma-5',
    category: 'math',
    question: 'Un padre tiene 30 años y su hija tiene 6 años. ¿Dentro de cuántos años la edad del padre será exactamente el doble de la edad de su hija?',
    options: [
      'Dentro de 18 años',
      'Dentro de 12 años',
      'Dentro de 15 años',
      'Dentro de 24 años'
    ],
    correctAnswerIndex: 0,
    explanation: 'La diferencia de edad siempre es constante: 30 - 6 = 24 años. Para que el padre tenga el doble, la hija debe tener 24 años. Como hoy tiene 6, faltan 24 - 6 = 18 años (Él tendrá 48 y ella 24).',
    curiousFact: 'La diferencia de edad entre dos personas jamás cambia a lo largo de sus vidas. ¡Este principio matemático simplifica cualquier problema de edades en 3 segundos!',
    difficulty: 'medio'
  },
  {
    id: 'ma-6',
    category: 'math',
    question: '¿Qué número continúa lógicamente en la famosa sucesión: 1, 1, 2, 3, 5, 8, 13, 21, ...?',
    options: [
      '34',
      '31',
      '29',
      '42'
    ],
    correctAnswerIndex: 0,
    explanation: 'Cada número de la sucesión de Fibonacci es la suma de los dos anteriores: 13 + 21 = 34.',
    curiousFact: 'Esta secuencia matemática se encuentra en los pétalos de las flores, las piñas de los pinos hondureños, los caparazones de nautilus y los brazos en espiral de las galaxias cósmicas.',
    difficulty: 'facil'
  },
  {
    id: 'ma-7',
    category: 'math',
    question: 'Si 5 máquinas tardan 5 minutos en fabricar 5 tornillos, ¿cuánto tiempo tardarán 100 máquinas en fabricar 100 tornillos?',
    options: [
      '5 minutos',
      '100 minutos',
      '50 minutos',
      '1 minuto'
    ],
    correctAnswerIndex: 0,
    explanation: 'Cada máquina tarda individualmente 5 minutos en fabricar 1 tornillo. Por lo tanto, 100 máquinas trabajando en paralelo tardarán exactamente 5 minutos en fabricar sus 100 tornillos.',
    curiousFact: 'Este acertijo ilustra el concepto de procesamiento en paralelo. Aumentar el número de obreros o procesadores reduce el tiempo total solo si la tarea puede fraccionarse.',
    difficulty: 'medio'
  },
  {
    id: 'ma-8',
    category: 'math',
    question: 'Un comerciante compra un producto por 70 lempiras, lo vende por 80, lo vuelve a comprar por 90 y lo vende finalmente por 100. ¿Cuál fue su ganancia neta total?',
    options: [
      '20 lempiras',
      '10 lempiras',
      '30 lempiras',
      '0 lempiras (quedó igual)'
    ],
    correctAnswerIndex: 0,
    explanation: 'En la primera venta ganó 80 - 70 = 10 lempiras. En la segunda venta ganó 100 - 90 = 10 lempiras. Ganancia total: 10 + 10 = 20 lempiras.',
    curiousFact: 'Es común que la gente se confunda sumando o restando el paso intermedio de la recompra a 90, pero si se analizan como dos negocios independientes, cada uno genera 10 lempiras limpios.',
    difficulty: 'medio'
  },
  {
    id: 'ma-9',
    category: 'math',
    question: 'Si lanzas dos dados comunes de 6 caras, ¿cuál es el resultado de la suma más probable de obtener?',
    options: [
      'El número 7',
      'El número 6',
      'El número 8',
      'El número 12'
    ],
    correctAnswerIndex: 0,
    explanation: 'El 7 tiene 6 combinaciones posibles de 36 totales (1+6, 2+5, 3+4, 4+3, 5+2, 6+1), con una probabilidad del 16.67%.',
    curiousFact: 'Por eso los juegos de mesa clásicos como Catan o las apuestas en Las Vegas diseñan sus reglas más cruciales alrededor del número 7.',
    difficulty: 'medio'
  },
  {
    id: 'ma-10',
    category: 'math',
    question: 'Un auto viaja de Tegucigalpa a San Pedro Sula a 60 km/h durante 120 km, y luego recorre otros 120 km a 40 km/h. ¿Cuál fue su velocidad promedio en todo el trayecto?',
    options: [
      '48 km/h',
      '50 km/h',
      '45 km/h',
      '52 km/h'
    ],
    correctAnswerIndex: 0,
    explanation: 'A 60 km/h tarda 2 horas. A 40 km/h tarda 3 horas. Tiempo total = 5 horas para recorrer 240 km. Velocidad promedio = 240 ÷ 5 = 48 km/h (media armónica, no aritmética).',
    curiousFact: 'La intuición sugiere erróneamente promediar 60 y 40 para obtener 50, pero como el auto pasó más tiempo viajando a la velocidad más baja (3 horas vs 2 horas), la media se inclina hacia 48 km/h.',
    difficulty: 'dificil'
  },

  // ==========================================
  // CULTURA GENERAL DEL MUNDO 🌍
  // ==========================================
  {
    id: 'cg-1',
    category: 'general',
    question: '¿Qué célebre pintor renacentista tardó más de 12 años en pintar los labios de la Mona Lisa (La Gioconda)?',
    options: [
      'Leonardo da Vinci',
      'Miguel Ángel Buonarroti',
      'Rafael Sanzio',
      'Sandro Botticelli'
    ],
    correctAnswerIndex: 0,
    explanation: 'Leonardo da Vinci utilizó la técnica del sfumato con docenas de capas translúcidas para dar la ilusión de una sonrisa que cambia según el ángulo con que se mire.',
    curiousFact: 'Leonardo llevó la pintura con él hasta su lecho de muerte en el Castillo de Clos Lucé en Francia, sin considerarla jamás completamente terminada.',
    difficulty: 'facil'
  },
  {
    id: 'cg-2',
    category: 'general',
    question: '¿Cuál es el planeta más caliente de todo nuestro Sistema Solar a pesar de no ser el más cercano al Sol?',
    options: [
      'Venus',
      'Mercurio',
      'Marte',
      'Júpiter'
    ],
    correctAnswerIndex: 0,
    explanation: 'Venus tiene una atmósfera densa compuesta en 96% por dióxido de carbono que genera un efecto invernadero extremo con temperaturas de hasta 465 °C, capaces de derretir plomo.',
    curiousFact: 'Mercurio está más cerca del Sol, pero al no tener atmósfera retentora, de noche sus temperaturas caen en picada a -180 °C.',
    difficulty: 'facil'
  },
  {
    id: 'cg-3',
    category: 'general',
    question: '¿Qué océano contiene la fosa marina más profunda del planeta, la Fosa de las Marianas?',
    options: [
      'Océano Pacífico',
      'Océano Atlántico',
      'Océano Índico',
      'Océano Ártico'
    ],
    correctAnswerIndex: 0,
    explanation: 'El Abismo de Challenger en la Fosa de las Marianas en el Pacífico occidental alcanza una profundidad aproximada de 10,994 metros.',
    curiousFact: 'Si colocáramos el Monte Everest (8,848 m) en el fondo del abismo, su cumbre aún quedaría sumergida bajo más de dos kilómetros de agua helada.',
    difficulty: 'facil'
  },
  {
    id: 'cg-4',
    category: 'general',
    question: '¿Quién escribió la célebre novela cumbre de la literatura hispana "Cien años de soledad"?',
    options: [
      'Gabriel García Márquez',
      'Mario Vargas Llosa',
      'Julio Cortázar',
      'Jorge Luis Borges'
    ],
    correctAnswerIndex: 0,
    explanation: 'El colombiano Gabriel García Márquez publicó esta obra maestra del realismo mágico en 1967, narrando siete generaciones de la familia Buendía en Macondo.',
    curiousFact: 'Gabo y su esposa Mercedes empeñaron la batidora y el secador de pelo para poder pagar el envío del manuscrito postal desde México a la editorial en Buenos Aires.',
    difficulty: 'facil'
  },
  {
    id: 'cg-5',
    category: 'general',
    question: '¿Cuál es el único mamífero capaz de volar activamente gracias a sus alas?',
    options: [
      'El murciélago',
      'La ardilla voladora',
      'El lémur volador',
      'El petauro del azúcar'
    ],
    correctAnswerIndex: 0,
    explanation: 'Las ardillas voladoras y lémures solo planean en el aire, mientras que los murciélagos poseen vuelo propulsado sostenido.',
    curiousFact: 'Los huesos de las alas del murciélago son anatómicamente idénticos a los dedos de una mano humana alargados, cubiertos por una fina membrana elástica llamada patagio.',
    difficulty: 'facil'
  },
  {
    id: 'cg-6',
    category: 'general',
    question: '¿En qué país del mundo se encuentra la ciudad perdida de Machu Picchu?',
    options: [
      'Perú',
      'Bolivia',
      'Ecuador',
      'Colombia'
    ],
    correctAnswerIndex: 0,
    explanation: 'Machu Picchu fue construido en el siglo XV por el emperador inca Pachacútec en lo alto de la cordillera de los Andes peruanos.',
    curiousFact: 'Los bloques de piedra fueron tallados con tal precisión milimétrica que encajan sin ningún tipo de mortero o cemento, y ni una hoja de papel puede deslizarse entre ellos.',
    difficulty: 'facil'
  },
  {
    id: 'cg-7',
    category: 'general',
    question: '¿Qué gas es el más abundante en la atmósfera que respiramos en la Tierra?',
    options: [
      'Nitrógeno (~78%)',
      'Oxígeno (~21%)',
      'Dióxido de Carbono (~0.04%)',
      'Argón (~0.93%)'
    ],
    correctAnswerIndex: 0,
    explanation: 'La atmósfera terrestre está compuesta aproximadamente por un 78% de nitrógeno, un 21% de oxígeno y un 1% de otros gases nobles.',
    curiousFact: 'Si la atmósfera tuviera un 30% de oxígeno en lugar de 21%, el más mínimo rayo causaría incendios forestales imparables y gigantescos insectos poblarían el planeta como en el período Carbonífero.',
    difficulty: 'medio'
  },
  {
    id: 'cg-8',
    category: 'general',
    question: '¿Qué científico formuló la teoría de la relatividad general que revolucionó la física en 1915?',
    options: [
      'Albert Einstein',
      'Isaac Newton',
      'Galileo Galilei',
      'Stephen Hawking'
    ],
    correctAnswerIndex: 0,
    explanation: 'Albert Einstein demostró que la gravedad no es una simple fuerza de atracción, sino la curvatura del espacio-tiempo provocada por la masa y la energía.',
    curiousFact: 'A pesar de sus revolucionarias teorías sobre la relatividad, Einstein recibió el Premio Nobel de Física en 1921 por su explicación del efecto fotoeléctrico, base de los paneles solares actuales.',
    difficulty: 'facil'
  }
];

export const CATEGORY_LABELS: Record<string, { label: string; icon: string; color: string; badgeBg: string; textAccent: string }> = {
  honduras: {
    label: 'Historia y Orgullo Catracho',
    icon: '🇭🇳',
    color: 'from-sky-500 to-blue-600',
    badgeBg: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    textAccent: 'text-sky-400'
  },
  grammar: {
    label: 'Gramática y Léxico Curioso',
    icon: '📚',
    color: 'from-rose-500 to-pink-600',
    badgeBg: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
    textAccent: 'text-rose-400'
  },
  math: {
    label: 'Agilidad y Retos Matemáticos',
    icon: '🔢',
    color: 'from-amber-500 to-emerald-600',
    badgeBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    textAccent: 'text-amber-400'
  },
  general: {
    label: 'Cultura General del Mundo',
    icon: '🌍',
    color: 'from-purple-500 to-indigo-600',
    badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    textAccent: 'text-purple-400'
  }
};

export const DEFAULT_COUPLE_BETS = [
  '🍕 El que pierda invita las baleadas especiales y los smoothies',
  '💆‍♂️ Masaje relajante de 20 minutos al ganador',
  '🍳 Preparar el desayuno en la cama toda la semana con amor',
  '🎬 Elegir las próximas 3 películas sin derecho a reclamo',
  '🧹 Lavar los platos y dejar la cocina limpia 5 días seguidos',
  '✍️ Escribir una carta o poema de amor sincero y leerlo en voz alta',
  '🍦 Pagar los helados y el postre favorito del campeón'
];

export const INITIAL_LEADERBOARD = [
  {
    id: 'lb-1',
    coupleName: 'Valeria & Daniel',
    player1Name: 'Vale',
    player2Name: 'Dani',
    winnerName: 'Vale 👑',
    totalScore: 5420,
    roundsPlayed: 10,
    accuracy: 94,
    date: '28 Sep 2026',
    location: 'Tegucigalpa, Honduras 🇭🇳',
    rankBadge: 'Pareja Legendaria Catracha'
  },
  {
    id: 'lb-2',
    coupleName: 'Sofía & Mateo',
    player1Name: 'Sofi',
    player2Name: 'Mateo',
    winnerName: 'Mateo 🚀',
    totalScore: 4980,
    roundsPlayed: 8,
    accuracy: 89,
    date: '26 Sep 2026',
    location: 'San Pedro Sula, Honduras 🇭🇳',
    rankBadge: 'Maestros del Saber'
  },
  {
    id: 'lb-3',
    coupleName: 'Camila & Sebastián',
    player1Name: 'Cami',
    player2Name: 'Seba',
    winnerName: 'Cami ✨',
    totalScore: 4650,
    roundsPlayed: 8,
    accuracy: 86,
    date: '24 Sep 2026',
    location: 'Roatán, Honduras 🇭🇳',
    rankBadge: 'Exploradores de Copán'
  },
  {
    id: 'lb-4',
    coupleName: 'Andrea & Carlos',
    player1Name: 'Andy',
    player2Name: 'Carlos',
    winnerName: 'Carlos 🏆',
    totalScore: 4210,
    roundsPlayed: 6,
    accuracy: 82,
    date: '22 Sep 2026',
    location: 'Comayagua, Honduras 🇭🇳',
    rankBadge: 'Mentes Brillantes'
  },
  {
    id: 'lb-5',
    coupleName: 'Lucía & Gabriel',
    player1Name: 'Lu',
    player2Name: 'Gaby',
    winnerName: 'Lu 💫',
    totalScore: 3890,
    roundsPlayed: 5,
    accuracy: 79,
    date: '20 Sep 2026',
    location: 'La Ceiba, Honduras 🇭🇳',
    rankBadge: 'Dúo Imparable'
  }
];
