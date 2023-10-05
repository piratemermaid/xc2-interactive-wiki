const { Model } = require("objection");
const TABLES = require("../tables");

class Element extends Model {
    static get tableName() {
        return TABLES.ELEMENTS;
    }
}

module.exports = Element;
