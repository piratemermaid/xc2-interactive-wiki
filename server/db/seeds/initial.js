const _ = require("lodash");

const TABLES = require("../tables");
const tableDropOrder = require("../tableDropOrder");
const blades = require("../../data/blades");
const elements = require("../../data/elements");
const roles = require("../../data/roles");
const itemTypes = require("../../data/itemTypes");
const items = require("../../data/items");
const fieldSkills = require("../../data/fieldSkills");
const bladeFieldSkills = require("../../data/bladeFieldSkills");
const {
    bladeFavoriteItemTypes,
    bladeFavoriteItems
} = require("../../data/bladeFavoriteItems");
const {
    arrayToObjectWithNames,
    formatConstantForInsert
} = require("../../utils/arrayObjectUtils");
const { WEAPON_CLASSES } = require("../../constants/bladeAttributes");
const {
    driverComboArts,
    weaponDriverComboArts,
    weaponDriverComboArtsForInsert
} = require("../../data/weaponDriverComboArts");

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

    const fieldSkillsByName = _.keyBy(
        await knex(TABLES.FIELD_SKILLS)
            .insert(arrayToObjectWithNames(fieldSkills))
            .returning("*"),
        "name"
    );

    const itemTypesByName = _.keyBy(
        await knex(TABLES.ITEM_TYPES)
            .insert(arrayToObjectWithNames(itemTypes))
            .returning("*"),
        "name"
    );

    const weaponClassesByName = _.keyBy(
        await knex(TABLES.WEAPON_CLASSES)
            .insert(formatConstantForInsert(WEAPON_CLASSES))
            .returning("*"),
        "name"
    );

    const driverComboArtsByName = _.keyBy(
        await knex(TABLES.DRIVER_COMBO_ARTS)
            .insert(arrayToObjectWithNames(driverComboArts))
            .returning("*"),
        "name"
    );

    await knex(TABLES.WEAPON_DRIVER_COMBO_ARTS)
        .insert(
            weaponDriverComboArtsForInsert.map((weapon) => {
                return {
                    weapon_class_id: weaponClassesByName[weapon.weaponClass].id,
                    driver_combo_art_id: driverComboArtsByName[weapon.art].id
                };
            })
        )
        .returning("*"),
        "name";

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
                        role_id: rolesByName[blade.role].id,
                        weapon_class_id:
                            weaponClassesByName[blade.weaponClass].id
                    };
                })
            )
            .returning("*"),
        "name"
    );

    await knex(TABLES.BLADE_FIELD_SKILLS).insert(
        bladeFieldSkills.map(({ blade, fieldSkill, maxLevel }) => {
            return {
                blade_id: bladesByName[blade].id,
                field_skill_id: fieldSkillsByName[fieldSkill].id,
                max_level: maxLevel
            };
        })
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
