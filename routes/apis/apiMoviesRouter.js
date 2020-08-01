var express = require('express');
var router = express.Router();
var apiMoviesController = require('../../controllers/apiController/apiMoviesController')

router.get('/movies', apiMoviesController.list);

router.get('/movies/:id', apiMoviesController.detail);

router.post('/movies/create', apiMoviesController.store);

router.put('/movies/edit/:id', apiMoviesController.update);

router.delete('/movies/delete/:id', apiMoviesController.destroy);

module.exports = router;