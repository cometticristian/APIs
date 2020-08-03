const db = require('../../database/models');
const sequelize = db.sequelize;
const jwt = require('jsonwebtoken');
const { check, validationResult, body } = require('express-validator');

let apiUsersController = {
    login: (req, res, next) => {

        db.User.findAll()
            .then((users) => {

                users.forEach((user) => {
                    console.log(user.email);
                    console.log(req.body.email);
                    console.log(user.password);
                    console.log(req.body.password);
                    if (user.email == req.body.email && user.password == req.body.password) {

                        const payload = {
                            user: {
                                user_id: user.id
                            }
                        };

                        jwt.sign(payload,
                            "patito",
                            {
                                expiresIn: 3000000000000
                            },
                            (err, token) => {
                                if (err) throw err;
                                res.status(200).json({
                                    token
                                });
                            }
                        );
                    } else {
                        res.send({
                            status: 404
                        })
                    }
                });
            })
            .catch((errors) => {
                console.log(errors);
            })
    },
    register: (req, res, next) => {

        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
            .then((newUser) => {
                res.send(newUser);
            })
            .catch((errors) => {
                console.log(errors);
            })
    }
}

module.exports = apiUsersController;