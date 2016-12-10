var express = require('express');
var router = express.Router();

var User = require('../models/User');

/*
 * GET: /users
 * Returns all users as JSON with no restrictions
 */
router.get('/', function (req, res) {
    User.collection().fetch().then(function (users) {
        res.send(users);
    });
});

/*
 * POST: /users
 * Creates new User
 */
router.post('/', function (req, res) {
    // TODO
});

module.exports = router;