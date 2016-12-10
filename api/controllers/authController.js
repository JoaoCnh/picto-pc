var express = require('express');
var bcrypt = require('bcrypt-nodejs');

var User = require('../models/User');

var router = express.Router();

/*
 * POST: /auth/login
 * Authenticates an User
 */
router.post('/login', function (req, res) {
    if (!req.body) return res.sendStatus(400);

    User.where("username", req.body.username).fetch().then(function (user) {
        if (!user) {
            return res.send({ error: true, message: "No User found" });
        }

        if (!user.validPassword(req.body.password)) {
            return res.send({ error: true, message: "Oops! Wrong password" });
        }

        return res.send({ error: false, user: user });
    })
    .catch(function (error) {
        console.log(error);
        return res.send({ error: true, message: error });
    });
});

/*
 * POST: /auth/register
 * Registers an User
 */
router.post('/register', function (req, res) {
    if (!req.body) return res.sendStatus(400);

    var user = new User();

    user.set('username', req.body.username);
    user.set('password', bcrypt.hashSync(req.body.password));

    user.save().then(function(user) {
        return res.send({ error: false, user: user });
    })
    .catch(function (err) {
        return res.send({ error: true, message: error });
    });
});

module.exports = router;