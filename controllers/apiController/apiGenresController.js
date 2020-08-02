const db = require('../../database/models');
const sequelize = db.sequelize;

let apiGenresController = {
    list: (req, res, next) => {
        db.Genre.findAll()
            .then((genero) => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genero.length
                    },
                    data: genero
                }
                res.json(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })
    },
     detail: (req, res, next) => {
        db.Genre.findByPk(req.params.id)
            .then((genero) => {
                res.json(genero)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    
    store: (req, res, next) => {
        db.Genre.create({
            name: req.body.name,
            ranking: req.body.ranking,
        })
            .then((genre) => {
                res.send(genre);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    
    update: (req, res, next) => {
        db.Genre.update({
            name: req.body.name,
            ranking: req.body.ranking,
        }, {
            where: {
                id: req.params.id
            }
        })
            .then((genre) => {
                res.send(genre)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    
    destroy: (req, res, next) => {
        let moviesWithGenre = db.Movie.update({
            genre_id: 'null'
        }, {
            where: {
                genre_id: req.params.id
            }
        });

        let seriesWithGenre = db.Serie.update({
            genre_id: 'null'
        }, {
            where: {
                genre_id: req.params.id
            }
        });

        let genre = db.Genre.destroy({
            where: {
                id: req.params.id
            }
        })

        Promise.all([moviesWithGenre, seriesWithGenre, genre])
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