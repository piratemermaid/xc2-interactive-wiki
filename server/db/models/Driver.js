const { Model } = require("objection");
const TABLES = require("../tables");

class Driver extends Model {
    static get tableName() {
        return TABLES.DRIVERS;
    }
}

module.exports = Driver;
