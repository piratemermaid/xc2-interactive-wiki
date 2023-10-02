const tableDropOrder = require("../tableDropOrder");
const TABLES = require("../tables");

exports.up = async function (knex) {
    await knex.schema.createTable(TABLES.ELEMENTS, (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable(TABLES.ROLES, (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable(TABLES.ITEM_TYPES, (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable(TABLES.ITEMS, (table) => {
        table.increments("id");
        table.string("name");
        table
            .integer("item_type_id")
            .references("id")
            .inTable(TABLES.ITEM_TYPES)
            .onDelete("cascade");
    });

    await knex.schema.createTable(TABLES.BLADES, (table) => {
        table.increments("id");
        table.string("name").notNullable();
        table.string("gender");
        table.string("species");
        table
            .integer("element_id")
            .references("id")
            .inTable(TABLES.ELEMENTS)
            .onDelete("cascade");
        table
            .integer("role_id")
            .references("id")
            .inTable(TABLES.ROLES)
            .onDelete("cascade");
    });

    await knex.schema.createTable(TABLES.BLADE_FAVORITE_ITEM_TYPES, (table) => {
        table.increments("id");
        table
            .integer("blade_id")
            .references("id")
            .inTable(TABLES.BLADES)
            .onDelete("cascade");
        table
            .integer("item_type_id")
            .references("id")
            .inTable(TABLES.ITEM_TYPES)
            .onDelete("cascade");
    });

    await knex.schema.createTable(TABLES.BLADE_FAVORITE_ITEMS, (table) => {
        table.increments("id");
        table
            .integer("blade_id")
            .references("id")
            .inTable(TABLES.BLADES)
            .onDelete("cascade");
        table
            .integer("item_id")
            .references("id")
            .inTable(TABLES.ITEMS)
            .onDelete("cascade");
    });
};

exports.down = async function (knex) {
    for (let table of tableDropOrder) {
        await knex.schema.dropTableIfExists(table);
    }
};
