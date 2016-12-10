var keys = require('./api/secrets/keys');

module.exports = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: keys.db.user,
        password: keys.db.password,
        database: 'picto',
        charset: 'utf8',
    },
    migrations: {
        directory: __dirname + '/api/db/migrations',
        tableName: 'migrations',
    },
}