const { ELEMENTS, ROLES } = require("../constants/bladeAttributes");
const ITEM_TYPES = require("../constants/itemTypes");

const blades = [
    {
        name: "Pyra",
        gender: "F",
        species: "human*",
        element: ELEMENTS.Fire,
        role: ROLES.Attacker,
        favoriteItemTypes: [ITEM_TYPES.Veggies, ITEM_TYPES.Literature],
        favoriteItems: ["Jenerossi Tea", "Woodgrain Alphorn"]
    }
];

module.exports = blades;
