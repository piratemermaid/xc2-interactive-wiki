if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development";
}
const knexconfig = require("./knexfile")[process.env.NODE_ENV ?? "development"];
const knex = require("knex")(knexconfig);

module.exports = {
    knex,
    knexconfig
};
