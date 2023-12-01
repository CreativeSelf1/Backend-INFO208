import mysql from "mysql2/promise";
import "dotenv/config";

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;
const database_port = process.env.DB_BASE_PORT ? parseInt(process.env.DB_BASE_PORT, 10) : 3306;



const pool = mysql.createPool({
  host: dbHost,
  port: database_port,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase,
  connectionLimit: 10,
});

// Verificar la conexión a la base de datos
pool
  .getConnection()
  .then((connection) => {
    console.log("Conexión a la base de datos establecida correctamente");
    connection.release();
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

export { pool };
