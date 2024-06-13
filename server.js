const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const movieController = require('./controllers/movieController');

const app = express();
const PORT = process.env.PORT || 3000; //"node server.js" no console para rodar o app

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/movies', movieController.getMovies);
app.post('/movies', movieController.addMovie);
app.put('/movies/:id', movieController.updateMovie);
app.get('/movies/:id', movieController.getMovieById);

app.use(express.static(path.join(__dirname, 'views')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
