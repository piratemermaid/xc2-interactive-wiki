const TABLES = require("../tables");

exports.up = async function (knex) {
    await knex.schema.createTable(TABLES.BLADES, (table) => {
        table.increments("id");
        table.string("name").notNullable();
    });
};

exports.down = async function (knex) {
    const tableOrder = [TABLES.BLADES];
    for (let table of tableOrder) {
        await knex.schema.dropTableIfExists(table);
    }
};
