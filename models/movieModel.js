const { Pool } = require('pg');

const pool = new Pool({ //aqui fica as credenciais do seu db (postgres)
  user: 'postgres',
  host: 'localhost',
  database: 'cinemadb',
  password: '123456',
  port: 5432,
});

const getMovies = async () => {
  const result = await pool.query('SELECT * FROM movies');
  return result.rows;
};

const addMovie = async (title, director) => {
  await pool.query('INSERT INTO movies (title, director) VALUES ($1, $2)', [title, director]);
};

const updateMovie = async (id, title, director) => {
  await pool.query('UPDATE movies SET title = $1, director = $2 WHERE id = $3', [title, director, id]);
};

const getMovieById = async (id) => {
  const result = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  getMovieById
};