var bcrypt   = require('bcrypt-nodejs');

var bookshelf = require('../db/bookshelf');

var User = bookshelf.Model.extend({
    tableName: 'users',

    validPassword: function (password) {
        return bcrypt.compareSync(password, this.get('password'));
    },
});

module.exports = User;