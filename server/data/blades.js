const {
    ELEMENTS,
    ROLES,
    FIELD_SKILLS,
    WEAPON_CLASSES
} = require("../constants/bladeAttributes");
const ITEM_TYPES = require("../constants/itemTypes");

const blades = [
    {
        name: "Pyra",
        gender: "F",
        species: "human*",
        weaponClass: WEAPON_CLASSES.Aegis_Sword,
        element: ELEMENTS.Fire,
        role: ROLES.Attacker,
        favoriteItemTypes: [ITEM_TYPES.Veggies, ITEM_TYPES.Literature],
        favoriteItems: ["Jenerossi Tea", "Woodgrain Alphorn"],
        fieldSkills: [
            { name: FIELD_SKILLS.Fire_Mastery, maxLevel: 3 },
            { name: FIELD_SKILLS.Focus, maxLevel: 3 },
            { name: FIELD_SKILLS.Cooking, maxLevel: 3 }
        ]
    }
];

module.exports = blades;
