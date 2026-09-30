import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google GenAI client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// API endpoint to generate custom AI trivia questions
app.post('/api/generate-round', async (req, res) => {
  const { category, customTopic, count = 5 } = req.body;

  if (!aiClient) {
    return res.status(503).json({
      error: 'Servicio de IA no disponible temporalmente. Usa las preguntas integradas del juego.',
      fallback: true
    });
  }

  try {
    const prompt = `Actúa como un experto creador de juegos de trivia para parejas en español.
Genera exactamente ${count} preguntas desafiantes, divertidas y educativas para el tema: "${category}" ${customTopic ? `(enfoque específico: ${customTopic})` : ''}.

Requisitos estrictos:
1. Si la categoría es de Honduras ("honduras"), incluye historia profunda, próceres (Morazán, Lempira, Cabañas, Valle), arqueología maya de Copán, geografía, tradiciones auténticas o curiosidades de Honduras.
2. Si es gramática o léxico ("grammar"), incluye palabras curiosas, etimologías hermosas, reglas de ortografía o vocabulario culto / hondureñismos. En "curiousFact", explica la etimología o un dato fascinante.
3. Si es matemáticas ("math"), crea problemas ingeniosos de lógica o cálculo mental rápido con datos cotidianos, y en "curiousFact" explica el atajo mental o truco lógico para resolverlo en segundos.
4. Si es cultura general ("general"), incluye ciencia, arte, literatura o historia del mundo fascinante.
5. Formato JSON estricto: un arreglo de objetos con los siguientes campos:
- id: string único
- category: "honduras" | "grammar" | "math" | "general"
- question: texto claro de la pregunta o problema
- options: arreglo de 4 opciones de texto distintas
- correctAnswerIndex: índice 0, 1, 2 o 3 de la respuesta correcta
- explanation: explicación concisa de por qué esa es la respuesta
- curiousFact: dato curioso sorprendente, origen etimológico o historia fascinante relacionada
- difficulty: "facil" | "medio" | "dificil"

Devuelve ÚNICAMENTE el JSON válido sin bloques markdown ni texto adicional.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '[]';
    const parsed = JSON.parse(text);

    return res.json({
      success: true,
      questions: parsed
    });
  } catch (error: any) {
    console.error('Error generating questions with Gemini:', error);
    return res.status(500).json({
      error: 'No se pudieron generar las preguntas con IA.',
      fallback: true
    });
  }
});

// Production or Vite Dev server middleware setup
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Serve static files from Vite build output
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    // In dev, use Vite's connect instance as middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
