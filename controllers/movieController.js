const movieModel = require('../models/movieModel');

const getMovies = async (req, res) => {
  try {
    const movies = await movieModel.getMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addMovie = async (req, res) => {
  const { title, director } = req.body;
  if (!title || !director) {
    return res.status(400).json({ error: 'Title and director are required' });
  }

  try {
    await movieModel.addMovie(title, director);
    res.status(201).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateMovie = async (req, res) => {
  const id = req.params.id;
  const { title, director } = req.body;
  if (!title || !director) {
    return res.status(400).json({ error: 'Title and director are required' });
  }

  try {
    await movieModel.updateMovie(id, title, director);
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMovieById = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await movieModel.getMovieById(id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  getMovieById
};
