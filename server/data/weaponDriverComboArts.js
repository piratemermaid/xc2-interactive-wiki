const _ = require("lodash");

const { WEAPON_CLASSES } = require("../constants/bladeAttributes");

const driverComboArts = {
    Break: {
        Rex: [
            WEAPON_CLASSES.Megalance,
            WEAPON_CLASSES.Chroma_Katana,
            WEAPON_CLASSES.Cobra_Bardiche
        ],
        Nia: [
            WEAPON_CLASSES.Bitball,
            WEAPON_CLASSES.Twin_Rings,
            WEAPON_CLASSES.Ether_Cannon,
            WEAPON_CLASSES.Infinity_Fans,
            WEAPON_CLASSES.Brilliant_Twinblades,
            WEAPON_CLASSES.Decimation_Cannon
        ],
        Tora: [WEAPON_CLASSES.Variable_Saber],
        Morag: [
            WEAPON_CLASSES.Whipsword,
            WEAPON_CLASSES.Ether_Cannon,
            WEAPON_CLASSES.Knuckle_Claws,
            WEAPON_CLASSES.Sword_Tonfa,
            WEAPON_CLASSES.Decimation_Cannon,
            WEAPON_CLASSES.Rockrending_Gauntlets
        ],
        Zeke: [WEAPON_CLASSES.Ether_Cannon, WEAPON_CLASSES.Decimation_Cannon]
    },
    Topple: {
        Rex: [WEAPON_CLASSES.Aegis_Sword],
        Nia: [WEAPON_CLASSES.Greataxe, WEAPON_CLASSES.Calamity_Scythe],
        Tora: [WEAPON_CLASSES.Drill_Shield],
        Morag: [WEAPON_CLASSES.Shield_Hammer],
        Zeke: [
            WEAPON_CLASSES.Greataxe,
            WEAPON_CLASSES.Knuckle_Claws,
            WEAPON_CLASSES.Sword_Tonfa,
            WEAPON_CLASSES.Calamity_Scythe,
            WEAPON_CLASSES.Rockrending_Gauntlets
        ]
    },
    Launch: {
        Rex: [
            WEAPON_CLASSES.Greataxe,
            WEAPON_CLASSES.Big_Bang_Edge,
            WEAPON_CLASSES.Calamity_Scythe
        ],
        Nia: [
            WEAPON_CLASSES.Knuckle_Claws,
            WEAPON_CLASSES.Sword_Tonfa,
            WEAPON_CLASSES.Rockrending_Gauntlets
        ],
        Tora: [WEAPON_CLASSES.Variable_Saber],
        Morag: [],
        Zeke: [WEAPON_CLASSES.Big_Bang_Edge, WEAPON_CLASSES.Shield_Hammer]
    },
    Smash: {
        Rex: [WEAPON_CLASSES.Dual_Scythes],
        Nia: [],
        Tora: [WEAPON_CLASSES.Mech_Arms],
        Morag: [
            WEAPON_CLASSES.Megalance,
            WEAPON_CLASSES.Chroma_Katana,
            WEAPON_CLASSES.Cobra_Bardiche
        ],
        Zeke: [WEAPON_CLASSES.Megalance, WEAPON_CLASSES.Cobra_Bardiche]
    }
};

let driverComboArtsForInsert = [];
_.map(driverComboArts, (items, comboStatus) => {
    _.map(items, (weapons, driver) => {
        for (const weapon of weapons) {
            driverComboArtsForInsert.push({ weapon, driver, comboStatus });
        }
    });
});

module.exports = { driverComboArts, driverComboArtsForInsert };
