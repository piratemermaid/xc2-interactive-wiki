const { ELEMENTS, ROLES } = require("../constants/bladeAttributes");
const ITEM_TYPES = require("../constants/itemTypes");

const blades = [
    {
        name: "Pyra",
        gender: "F",
        species: "human*",
        element: ELEMENTS.FIRE,
        role: ROLES.ATTACKER,
        favoriteItemTypes: [ITEM_TYPES.VEGGIES, ITEM_TYPES.LITERATURE],
        favoriteItems: ["Jenerossi Tea", "Woodgrain Alphorn"]
    }
];

module.exports = blades;
