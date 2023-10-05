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

    await knex.schema.createTable(TABLES.FIELD_SKILLS, (table) => {
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

    await knex.schema.createTable(TABLES.WEAPON_CLASSES, (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable(TABLES.DRIVER_COMBO_ARTS, (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable(TABLES.WEAPON_DRIVER_COMBO_ARTS, (table) => {
        table.increments("id");
        table
            .integer("weapon_class_id")
            .references("id")
            .inTable(TABLES.WEAPON_CLASSES)
            .onDelete("cascade");
        table
            .integer("driver_combo_art_id")
            .references("id")
            .inTable(TABLES.DRIVER_COMBO_ARTS)
            .onDelete("cascade");
    });

    await knex.schema.createTable(TABLES.BLADES, (table) => {
        table.increments("id");
        table.string("name").notNullable();
        table.string("gender");
        table.string("species");
        table.jsonb("affinity_chart");
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
        table
            .integer("weapon_class_id")
            .references("id")
            .inTable(TABLES.WEAPON_CLASSES)
            .onDelete("cascade");
    });

    await knex.schema.createTable(TABLES.BLADE_FIELD_SKILLS, (table) => {
        table.increments("id");
        table
            .integer("blade_id")
            .references("id")
            .inTable(TABLES.BLADES)
            .onDelete("cascade");
        table
            .integer("field_skill_id")
            .references("id")
            .inTable(TABLES.FIELD_SKILLS)
            .onDelete("cascade");
        table.integer("max_level");
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

    await knex.schema.createTable(TABLES.USERS, (table) => {
        table.increments("id");
        table.string("email");
    });

    await knex.schema.createTable(TABLES.USERS_BLADES, (table) => {
        table.increments("id");
        table
            .integer("user_id")
            .references("id")
            .inTable(TABLES.USERS)
            .onDelete("cascade");
        table
            .integer("blade_id")
            .references("id")
            .inTable(TABLES.BLADES)
            .onDelete("cascade");
    });
};

exports.down = async function (knex) {
    for (let table of tableDropOrder) {
        await knex.schema.dropTableIfExists(table);
    }
};
