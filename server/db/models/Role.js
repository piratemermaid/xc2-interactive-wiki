const { Model } = require("objection");
const TABLES = require("../tables");

class Role extends Model {
    static get tableName() {
        return TABLES.ROLES;
    }
}

module.exports = Role;
