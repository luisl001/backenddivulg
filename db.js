import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar las variables del archivo .env
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,  
  port: process.env.DB_PORT || 27736,
  ssl: {
    // Esto es vital para Aiven
    rejectUnauthorized: true 
  },
  connectionLimit: 10,
  queueLimit: 0
});

export default db;