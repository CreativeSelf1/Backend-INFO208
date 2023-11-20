// db.ts

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "fernando",
  password: "fernando0607",
  database: "medios_prensa",
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
