var express = require('express');
var router = express.Router();
var apiMoviesController = require('../../controllers/apiController/apiMoviesController');
var apiGenresController = require('../../controllers/apiController/apiGenresController');
var apiActorsController = require('../../controllers/apiController/apiActorsController');
var apiUsersController = require('../../controllers/apiController/apiUsersController');
var middlewares = require('../../middlewares/token')

// MOVIES \\

router.get('/movies', middlewares, apiMoviesController.list);

router.get('/movies/:id', middlewares, apiMoviesController.detail);

router.post('/movies/create', middlewares, apiMoviesController.store);

router.put('/movies/edit/:id', middlewares, apiMoviesController.update);

router.delete('/movies/delete/:id', middlewares, apiMoviesController.destroy);

// GENRES \\

router.get('/genres', middlewares, apiGenresController.list);

router.get('/genres/:id', middlewares, apiGenresController.detail);

router.post('/genres', middlewares, apiGenresController.store);

router.put('/genres/:id', middlewares, apiGenresController.update);

router.delete('/genres/:id', middlewares, apiGenresController.destroy);

// ACTORS \\

router.get('/actors', middlewares, apiActorsController.list);

router.get('/actors/:id', middlewares, apiActorsController.detail);

router.post('/actors', middlewares, apiActorsController.store);

router.put('/actors/:id', middlewares, apiActorsController.update);

router.delete('/actors/:id', middlewares, apiActorsController.destroy);

// USERS \\

router.post('/users/login', apiUsersController.login);

router.post('/users/register', apiUsersController.register);

module.exports = router;