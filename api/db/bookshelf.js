var knexConfig = require('../../knexfile');
var knex = require('knex')(knexConfig);

module.exports = require('bookshelf')(knex);