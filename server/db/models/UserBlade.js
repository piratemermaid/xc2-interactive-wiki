const { Model } = require("objection");
const TABLES = require("../tables");

class UserBlade extends Model {
    static get tableName() {
        return TABLES.USERS_BLADES;
    }
}

module.exports = UserBlade;
