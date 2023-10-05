const { Model } = require("objection");
const TABLES = require("../tables");

class UserDriver extends Model {
    static get tableName() {
        return TABLES.USERS_TEAM_DRIVERS;
    }
}

module.exports = UserDriver;
