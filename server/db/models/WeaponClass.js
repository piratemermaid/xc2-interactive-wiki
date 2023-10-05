const { Model } = require("objection");
const TABLES = require("../tables");

class weaponClass extends Model {
    static get tableName() {
        return TABLES.WEAPON_CLASSES;
    }
}

module.exports = weaponClass;
