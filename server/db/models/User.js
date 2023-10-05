const { Model } = require("objection");
const TABLES = require("../tables");

class User extends Model {
    static get tableName() {
        return TABLES.USERS;
    }
}

module.exports = User;
