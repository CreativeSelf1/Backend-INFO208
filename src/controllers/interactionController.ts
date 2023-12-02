import { Request, Response } from "express";
import { pool } from "./db";

export const getServiceType = async (req: Request, res: Response) => {
  const { command } = req.params;
  try {
    const results = await pool.query('SELECT * FROM servicios s WHERE "servicio_ID" = $1', [command]);
    res.json(results.rows);
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const results = await pool.query("SELECT * FROM servicios");
    
    res.json(results.rows);
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};

export const getService = async (req: Request, res: Response) => {
  const { command } = req.params;
  try {
    const results = await pool.query('SELECT * FROM servicios s JOIN tipo_servicio ts ON s."tipo_ID" = ts."tipo_ID" WHERE nombre_tipo = $1', [command]);

    res.json(results.rows);
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
}
;

export const addComment = async (req: Request, res: Response) => {
  try {
    // Extrae los datos del cuerpo de la solicitud
    const { servicio_id, comentario } = req.body;

    console.log('servicio_id:', servicio_id);
    console.log('comentario:', comentario);

    // Realiza la inserción en la base de datos
    await pool.query("INSERT INTO evaluacion (servicio_ID, comentario) VALUES (?, ?)", [servicio_id, comentario]);
  } catch (error) {
    console.error("Error al agregar comentario a la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};

export const comentario = async (req: Request, res: Response) => {
  const { command } = req.params;
  try {
    const results = await pool.query('select e."comentario"  from servicios s join evaluacion e on s."servicio_ID" = e."servicio_ID" where s."servicio_ID" = $1',[command]);

    res.json(results.rows);
  } catch (error) {
    console.error("Error en la consulta a la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};



