import { Request, Response } from "express";
import { pool } from "./db";

export const getAllInteractions = async (req: Request, res: Response) => {
  try {
    const results = await pool.query("SELECT nombre_prensa, count(*) FROM categoria GROUP BY nombre_prensa");
    res.json(results[0]);
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};