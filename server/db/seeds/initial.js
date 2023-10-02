const TABLES = require("../tables");
const blades = require("../../data/blades");

exports.seed = async function (knex) {
    for (let table in TABLES) {
        await resetTable(knex, TABLES[table]);
    }

    await knex("blades").insert(blades);
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};
