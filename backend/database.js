import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getGames() {
    try {
        const [rows] = await pool.query("SELECT * from games");
        return rows;
    } catch (err) {
        console.error("Error executing query:", err);
        return err;
    }
}

export async function getGame(id) {
    try {
        const [rows] = await pool.query(`
        SELECT * 
        FROM games
        WHERE id = ?
        `, [id])
        return rows[0] 
    } catch (err) {
        console.error("Error executing query:", err);
        return err;
    }
}

export async function addGame(title, desc, cover, price) {
    try {
        const [result] = await pool.query(`
        INSERT INTO games (title, \`desc\`, cover, price)
        VALUES (?, ?, ?, ?)
        `, [title, desc, cover, price])
        const id = result.insertId
        return getGame(id)
    } catch (err) {
        console.error("Error executing query:", err);
        return err;
    }
}

export async function updateGame(id, title, desc, cover, price) {
  const [result] = await pool.query(`
    UPDATE games
    SET title = ?, \`desc\` = ?, cover = ?,price = ?
    WHERE id = ?
  `, [title, desc, cover, price, id]);
  return getGame(id);
}

export async function deleteGame(id) {
  const result = await pool.query(`
      DELETE FROM games
      WHERE id = ?
  `, [id]);
  return result;
}