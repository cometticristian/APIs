
const jwt = require('jsonwebtoken');


let token = function  (req, res, next) {
    const token = req.header('token');
    if (!token) {
        res.send('no hay token');
    }
    try {
        const decoded = jwt.verify(token, "patito");
        console.log(decoded);
        user = decoded.user
        res.send('el id de usuario logueado es: ' + user.user_id)
    } catch (e) {
        console.error(e);
        res.send('token invalido')
    }
  }

  module.exports = token;