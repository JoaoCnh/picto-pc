var express = require('express');

var router = express.Router();

router.use('/users', require('./usersController'));
router.use('/auth', require('./authController'));

module.exports = router;