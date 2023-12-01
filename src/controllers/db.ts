import mysql from "mysql2/promise";
import "dotenv/config";

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;




const pool = mysql.createPool({
  host: "192.168.0.9",
  port: 3307,
  user: "root",
  password: "fernando0607",
  database: "info",
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
