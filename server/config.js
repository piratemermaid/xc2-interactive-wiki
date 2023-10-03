const knexconfig = require("./knexfile")[process.env.NODE_ENV ?? "development"];
const knex = require("knex")(knexconfig);
const bookshelf = require("bookshelf")(knex);

module.exports = {
    knex,
    knexconfig,
    bookshelf
};
