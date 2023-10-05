const TABLES = require("./tables");

const createOrder = [
    TABLES.ELEMENTS,
    TABLES.ROLES,
    TABLES.FIELD_SKILLS,
    TABLES.ITEM_TYPES,
    TABLES.ITEMS,
    TABLES.WEAPON_CLASSES,
    TABLES.DRIVER_COMBO_ARTS,
    TABLES.WEAPON_DRIVER_COMBO_ARTS,
    TABLES.BLADES,
    TABLES.BLADE_FIELD_SKILLS,
    TABLES.BLADE_FAVORITE_ITEM_TYPES,
    TABLES.BLADE_FAVORITE_ITEMS,

    TABLES.USERS
];

let dropOrder = [];
for (let i = createOrder.length - 1; i >= 0; i--) {
    dropOrder.push(createOrder[i]);
}

module.exports = dropOrder;
