import express from 'express';
import cors from 'cors';

import { interactionRouter } from './routes/interactionRoute';
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Resto de la configuración de tu aplicación...

const port = 3000;

//apliacion
app.use("/api/command",interactionRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
