const { WEAPON_CLASSES } = require("../constants/bladeAttributes");
const DRIVER_COMBO_ARTS = require("../constants/driverComboArts");

const { Break, Topple, Launch, Smash } = DRIVER_COMBO_ARTS;

const weaponDriverComboArts = [
    {
        name: WEAPON_CLASSES.Aegis_Sword,
        arts: [Topple]
    }
];

let weaponDriverComboArtsForInsert = [];
for (let weapon of weaponDriverComboArts) {
    for (let art of weapon.arts) {
        weaponDriverComboArtsForInsert.push({ weaponClass: weapon.name, art });
    }
}

module.exports = { weaponDriverComboArtsForInsert };
