var express = require('express');
var router = express.Router();
var apiMoviesController = require('../../controllers/apiController/apiMoviesController');
var apiGenresController = require('../../controllers/apiController/apiGenresController');
var apiActorsController = require('../../controllers/apiController/apiActorsController');

// MOVIES \\

router.get('/movies', apiMoviesController.list);

router.get('/movies/:id', apiMoviesController.detail);

router.post('/movies/create', apiMoviesController.store);

router.put('/movies/edit/:id', apiMoviesController.update);

router.delete('/movies/delete/:id', apiMoviesController.destroy);

// GENRES \\

router.get('/genres', apiGenresController.list);

router.get('/genres/:id', apiGenresController.detail);

router.post('/genres', apiGenresController.store);

router.put('/genres/:id', apiGenresController.update);

router.delete('/genres/:id', apiGenresController.destroy);

// ACTORS \\

router.get('/actors', apiActorsController.list);

router.get('/actors/:id', apiActorsController.detail);

router.post('/actors', apiActorsController.store);

router.put('/actors/:id', apiActorsController.update);

router.delete('/actors/:id', apiActorsController.destroy);

module.exports = router;