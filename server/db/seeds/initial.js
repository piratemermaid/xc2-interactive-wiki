const _ = require("lodash");

const TABLES = require("../tables");
const blades = require("../../data/blades");
const elements = require("../../data/elements");
const roles = require("../../data/roles");
const itemTypes = require("../../data/itemTypes");
const items = require("../../data/items");
const {
    bladeFavoriteItemTypes,
    bladeFavoriteItems
} = require("../../data/bladeFavoriteItems");
const arrayToObjectWithNames = require("../../utils/arrayToObjectWithNames");
const tableDropOrder = require("../tableDropOrder");

exports.seed = async function (knex) {
    for (const table of tableDropOrder) {
        await resetTable(knex, table);
    }

    const elementsByName = _.keyBy(
        await knex(TABLES.ELEMENTS)
            .insert(arrayToObjectWithNames(elements))
            .returning("*"),
        "name"
    );

    const rolesByName = _.keyBy(
        await knex(TABLES.ROLES)
            .insert(arrayToObjectWithNames(roles))
            .returning("*"),
        "name"
    );

    const itemTypesByName = _.keyBy(
        await knex(TABLES.ITEM_TYPES)
            .insert(arrayToObjectWithNames(itemTypes))
            .returning("*"),
        "name"
    );

    const itemsByName = _.keyBy(
        await knex(TABLES.ITEMS)
            .insert(
                items.map((item) => {
                    return {
                        name: item.name,
                        item_type_id: itemTypesByName[item.itemType].id
                    };
                })
            )
            .returning("*"),
        "name"
    );

    const bladesByName = _.keyBy(
        await knex(TABLES.BLADES)
            .insert(
                blades.map((blade) => {
                    return {
                        name: blade.name,
                        gender: blade.gender,
                        species: blade.species,
                        element_id: elementsByName[blade.element].id,
                        role_id: rolesByName[blade.role].id
                    };
                })
            )
            .returning("*"),
        "name"
    );

    await knex(TABLES.BLADE_FAVORITE_ITEM_TYPES).insert(
        bladeFavoriteItemTypes.map(({ blade, itemType }) => {
            return {
                blade_id: bladesByName[blade].id,
                item_type_id: itemTypesByName[itemType].id
            };
        })
    );

    await knex(TABLES.BLADE_FAVORITE_ITEMS).insert(
        bladeFavoriteItems.map(({ blade, item }) => {
            return {
                blade_id: bladesByName[blade].id,
                item_id: itemsByName[item].id
            };
        })
    );
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};
