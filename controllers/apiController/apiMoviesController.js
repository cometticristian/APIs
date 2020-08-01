const db = require('../../database/models');
const sequelize = db.sequelize;

let apiMoviesController = {
    list: (req, res, next) => {
        db.Movie.findAll()
            .then((peliculas) => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: peliculas.length
                    },
                    data: peliculas
                }
                res.json(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    detail: (req, res, next) => {
        db.Movie.findByPk(req.params.id, {
            include: [{ association: 'genre' }, { association: 'actors' }]
        })
            .then((pelicula) => {
                res.json(pelicula)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    store: (res, req, next) => {
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            genre_id: req.body.genre
        })
            .then(() => {
                res.redirect('list');
            })
            .catch((error) => {
                console.log(error);
            })
    },
    update: (req, res, next) => {
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            genre_id: req.body.genre
        }, {
            where: {
                id: req.params.id
            }
        })
            .then((editedMovie) => {
                res.send(editedMovie)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    destroy: (req, res, next) => {
        let favourite = db.Actor.update({
            favorite_movie_id: 'null'
        }, {
            where: {
                favorite_movie_id: req.params.id
            }
        });

        let relation = db.Actor_movie.destroy({
            where: {
                movie_id: req.params.id
            }
        })

        let movie = db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })

        Promise.all([favourite, relation, movie])
            .then(() => {
                res.redirect('/movies/list');
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


module.exports = apiMoviesController;