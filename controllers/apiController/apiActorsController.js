const db = require('../../database/models');
const sequelize = db.sequelize;

let apiGenresController = {
    list: (req, res, next) => {
        db.Actor.findAll()
            .then((actor) => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: actor.length
                    },
                    data: actor
                }
                res.json(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })
    },
     detail: (req, res, next) => {
        db.Actor.findByPk(req.params.id)
            .then((actor) => {
                res.json(actor)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    
    store: (req, res, next) => {
        db.Actor.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
            favorite_movie_id: req.body.favorite_movie_id,
        })
            .then((actor) => {
                res.send(actor);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    
    update: (req, res, next) => {
        db.Actor.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            rating: req.body.rating,
            favorite_movie_id: req.body.favorite_movie_id,
        }, {
            where: {
                id: req.params.id
            }
        })
            .then((actor) => {
                res.send(actor)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    
    destroy: (req, res, next) => {
        let episodesWithActors = db.Actor_episode.destroy({
            where: {
                actor_id: req.params.id
            }
        });

        let moviesWithActors = db.Actor_movie.destroy({
            where: {
                actor_id: req.params.id
            }
        });

        let actor = db.Actor.destroy({
            where: {
                id: req.params.id
            }
        })

        Promise.all([episodesWithActors, moviesWithActors, actor])
            .then(() => {
                res.send({
                    status: 200
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


module.exports = apiGenresController;