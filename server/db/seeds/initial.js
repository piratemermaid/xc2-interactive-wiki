const _ = require("lodash");

const TABLES = require("../tables");
const tableDropOrder = require("../tableDropOrder");
const blades = require("../../data/blades");
const items = require("../../data/items");
const {
    bladeFavoriteItemTypes,
    bladeFavoriteItems,
    bladeFieldSkills
} = require("../../data/bladeRelations");
const { formatConstantForInsert } = require("../../utils/arrayObjectUtils");
const {
    WEAPON_CLASSES,
    ELEMENTS,
    ROLES,
    FIELD_SKILLS
} = require("../../constants/bladeAttributes");
const ITEM_TYPES = require("../../constants/itemTypes");
const DRIVER_COMBO_STATUSES = require("../../constants/driverComboStatuses");
const DRIVERS = require("../../constants/drivers");
const {
    driverComboArtsForInsert
} = require("../../data/weaponDriverComboArts");
const userData = require("../fakeUserData");

exports.seed = async function (knex) {
    for (const table of tableDropOrder) {
        await resetTable(knex, table);
    }

    const elementsByName = _.keyBy(
        await knex(TABLES.ELEMENTS)
            .insert(formatConstantForInsert(ELEMENTS))
            .returning("*"),
        "name"
    );

    const rolesByName = _.keyBy(
        await knex(TABLES.ROLES)
            .insert(formatConstantForInsert(ROLES))
            .returning("*"),
        "name"
    );

    const fieldSkillsByName = _.keyBy(
        await knex(TABLES.FIELD_SKILLS)
            .insert(formatConstantForInsert(FIELD_SKILLS))
            .returning("*"),
        "name"
    );

    const itemTypesByName = _.keyBy(
        await knex(TABLES.ITEM_TYPES)
            .insert(formatConstantForInsert(ITEM_TYPES))
            .returning("*"),
        "name"
    );

    const weaponClassesByName = _.keyBy(
        await knex(TABLES.WEAPON_CLASSES)
            .insert(formatConstantForInsert(WEAPON_CLASSES))
            .returning("*"),
        "name"
    );

    const driverComboStatusesByName = _.keyBy(
        await knex(TABLES.DRIVER_COMBO_STATUSES)
            .insert(formatConstantForInsert(DRIVER_COMBO_STATUSES))
            .returning("*"),
        "name"
    );

    const driversByName = _.keyBy(
        await knex(TABLES.DRIVERS)
            .insert(formatConstantForInsert(DRIVERS))
            .returning("*"),
        "name"
    );

    await knex(TABLES.DRIVER_COMBO_ARTS).insert(
        driverComboArtsForInsert.map((item) => {
            return {
                weapon_class_id: weaponClassesByName[item.weapon].id,
                driver_id: driversByName[item.driver].id,
                driver_status_id: driverComboStatusesByName[item.comboStatus].id
            };
        })
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
                        gender: blade.gender ?? "",
                        species: blade.species ?? "",
                        affinity_chart: blade.affinityChart ?? {},
                        element_id: elementsByName[blade.element].id,
                        role_id: blade.role ? rolesByName[blade.role].id : 1,
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

    //////////////////////////
    // FAKE USER DATA INSERT
    //////////////////////////
    await knex(TABLES.USERS).insert({ email: "a@a.com" });

    await knex(TABLES.USERS_BLADES).insert(
        userData.bladesObtained.map((name) => {
            return {
                user_id: 1,
                blade_id: bladesByName[name].id
            };
        })
    );
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};
