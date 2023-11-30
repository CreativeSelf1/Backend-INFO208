import express from 'express';
import cors from 'cors';
import "dotenv/config";
import { interactionRouter } from './routes/interactionRoute';

const app = express();
const port = process.env.DB_PORT;

// Habilitar CORS para todas las rutas
app.use(cors());
app.use(express.json());
// Resto de la configuración de tu aplicación...


//apliacion
app.use("/api/command",interactionRouter);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://192.168.43.9:${port}`);
});
