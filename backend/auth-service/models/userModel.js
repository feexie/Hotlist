const pool = require('../../db/database');

// Register a new user in the database
const registerUser = async (firstName, lastName, email, passwordHash) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [firstName, lastName, email, passwordHash];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Find a user by email
const findUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

module.exports = { registerUser, findUserByEmail };
