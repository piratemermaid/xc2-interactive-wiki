const {
    ELEMENTS,
    ROLES,
    FIELD_SKILLS,
    WEAPON_CLASSES
} = require("../constants/bladeAttributes");
const ITEM_TYPES = require("../constants/itemTypes");
const DRIVERS = require("../constants/drivers");
const affinityCharts = require("./affinityCharts");

const blades = [
    {
        name: "Pyra",
        driver: DRIVERS.Rex,
        gender: "F",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Aegis_Sword,
        element: ELEMENTS.Fire,
        role: ROLES.Attacker,
        favoriteItemTypes: [ITEM_TYPES.Veggies, ITEM_TYPES.Literature],
        favoriteItems: ["Jenerossi Tea", "Woodgrain Alphorn"],
        fieldSkills: [
            { name: FIELD_SKILLS.Fire_Mastery, maxLevel: 3 },
            { name: FIELD_SKILLS.Focus, maxLevel: 3 },
            { name: FIELD_SKILLS.Cooking, maxLevel: 3 }
        ],
        affinityChart: affinityCharts.Pyra
    },
    {
        name: "Mythra",
        driver: DRIVERS.Rex,
        gender: "F",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Aegis_Sword,
        element: ELEMENTS.Light,
        role: ROLES.Attacker,
        favoriteItemTypes: [ITEM_TYPES.Desserts, ITEM_TYPES.Art],
        favoriteItems: ["Cloud Sea Crab Sticks", "Final Chorus"],
        fieldSkills: [
            { name: FIELD_SKILLS.Light_Mastery, maxLevel: 3 },
            { name: FIELD_SKILLS.Focus, maxLevel: 3 },
            { name: FIELD_SKILLS.Girls_Talk, maxLevel: 3 }
        ]
        //affinityChart: affinityCharts.Mythra
    },
    {
        name: "Roc",
        driver: DRIVERS.Rex,
        gender: null,
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Dual_Scythes,
        element: ELEMENTS.Wind,
        role: ROLES.Attacker,
        favoriteItemTypes: [ITEM_TYPES.Seafood, ITEM_TYPES.Board_Games],
        favoriteItems: ["Wood-Dye Waistcloth", "Abyssturgeon Medallion"],
        fieldSkills: [
            { name: FIELD_SKILLS.Wind_Mastery, maxLevel: 3 },
            { name: FIELD_SKILLS.Miasma_Dispersal, maxLevel: 1 },
            { name: FIELD_SKILLS.Lockpicking, maxLevel: 3 }
        ]
        //affinityChart: affinityCharts.Roc
    },
    {
        name: "Nia",
        driver: DRIVERS.Rex,
        gender: "F",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Catalyst_Scimitar,
        element: ELEMENTS.Water,
        role: ROLES.Healer,
        favoriteItemTypes: [ITEM_TYPES.Seafood, ITEM_TYPES.Instruments],
        favoriteItems: ["Snowbaby Potato Salad", "Sneak-Thief King"],
        fieldSkills: [
            { name: FIELD_SKILLS.Water_Mastery, maxLevel: 3 },
            { name: FIELD_SKILLS.Forestry, maxLevel: 3 },
            { name: FIELD_SKILLS.Fortitude, maxLevel: 3 }
        ]
        //affinityChart: affinityCharts.Nia
    },
    {
        name: "Dromarch",
        driver: DRIVERS.NIA,
        gender: "M",
        species: "Animal",
        weaponClass: WEAPON_CLASSES.Twin_Rings,
        element: ELEMENTS.Water,
        role: ROLES.Healer,
        favoriteItemTypes: [ITEM_TYPES.Meats, ITEM_TYPES.Board_Games],
        favoriteItems: ["Dried Sunfish", "Cedarwood Koto"],
        fieldSkills: [
            { name: FIELD_SKILLS.Water_Mastery, maxLevel: 3 },
            { name: FIELD_SKILLS.Botany, maxLevel: 3 },
            { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 }
        ]
        //affinityChart: affinityCharts.Dromarch
    },
    {
        name: "Poppi α",
        driver: DRIVERS.TORA,
        gender: "F",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Drill_Shield,
        element: ELEMENTS.Earth, //TODO: can change this
        role: ROLES.Tank,
        favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Instruments],
        favoriteItems: ["Fizz Juice", "Roly-Poly Maracas"],
        fieldSkills: [
            { name: FIELD_SKILLS.Leaping, maxLevel: 3 },
            { name: FIELD_SKILLS.Nopon_Wisdom, maxLevel: 3 },
            { name: FIELD_SKILLS.Superstrength, maxLevel: 3 }
        ]
        //affinityChart: affinityCharts.Poppi_α
    },
    {
        name: "Poppi QT",
        driver: DRIVERS.TORA,
        gender: "F",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Mech_Arms,
        element: ELEMENTS.Fire, //TODO: can change this
        role: ROLES.Tank,
        favoriteItemTypes: [ITEM_TYPES.Veggies, ITEM_TYPES.Art],
        favoriteItems: ["Sky-Jewel Tart", "Genbu-Weave Cloth"],
        fieldSkills: [
            { name: FIELD_SKILLS.Lockpicking, maxLevel: 3 },
            { name: FIELD_SKILLS.Fortitude, maxLevel: 3 },
            { name: FIELD_SKILLS.Agronomy, maxLevel: 3 }
        ]
        //affinityChart: affinityCharts.Poppi_QT
    },
    {
        name: "Poppi QTπ",
        driver: DRIVERS.TORA,
        gender: "F",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Variable_Saber,
        element: ELEMENTS.Ice, //TODO: can change this
        role: ROLES.Attacker,
        favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        favoriteItems: ["Melodious Melon Parfait", "Flurrycomb"],
        fieldSkills: [
            { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
            { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
            { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Brighid",
        driver: DRIVERS.MORAG,
        gender: "F",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Whipswords,
        element: ELEMENTS.Fire
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Aegaeon",
        driver: DRIVERS.MORAG,
        gender: "M",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Chroma_Katana,
        element: ELEMENTS.Water
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Pandoria",
        driver: DRIVERS.ZEKE,
        gender: "M",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Big_Bang_Edge,
        element: ELEMENTS.Electric
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Godfrey",
        gender: "M",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Shield_Hammer,
        element: ELEMENTS.Ice
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Wulfric",
        gender: "M",
        species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Megalance,
        element: ELEMENTS.Earth
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Perceval",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Chroma_Katana,
        element: ELEMENTS.Dark
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Vale",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Megalance,
        element: ELEMENTS.Dark
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Agate",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Greataxe,
        element: ELEMENTS.Earth
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Gorg",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Greataxe,
        element: ELEMENTS.Water
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Boreas",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Bitball,
        element: ELEMENTS.Wind
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Dagas",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Greataxe,
        element: ELEMENTS.Fire
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Kasandra",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Shield_Hammer,
        element: ELEMENTS.Dark
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Praxis",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Megalance,
        element: ELEMENTS.Water
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Theory",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Chroma_Katana,
        element: ELEMENTS.Ice
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Perun",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Megalance,
        element: ELEMENTS.Ice
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Kora",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Knuckle_Claws,
        element: ELEMENTS.Electric
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Azami",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Ether_Cannon,
        element: ELEMENTS.Dark
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Ursula",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Knuckle_Claws,
        element: ELEMENTS.Ice
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Newt",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Chroma_Katana,
        element: ELEMENTS.Fire
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Nim",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Knuckle_Claws,
        element: ELEMENTS.Earth
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Sheba",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Ether_Cannon,
        element: ELEMENTS.Water
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Vess",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Bitball,
        element: ELEMENTS.Electric
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Adenine",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Knuckle_Claws,
        element: ELEMENTS.Wind
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Electra",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Shield_Hammer,
        element: ELEMENTS.Electric
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Zenobia",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Greataxe,
        element: ELEMENTS.Wind
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Finch",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Shield_Hammer,
        element: ELEMENTS.Wind
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Floren",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Bitball,
        element: ELEMENTS.Earth
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "KOS-MOS",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Ether_Cannon,
        element: ELEMENTS.Light
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Herald",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Ether_Cannon,
        element: ELEMENTS.Electric
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Dahlia",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Bitball,
        element: ELEMENTS.Ice
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "T-elos",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Greataxe,
        element: ELEMENTS.Dark
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Poppibuster",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Shield_Hammer,
        element: ELEMENTS.Light
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Crossette",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Bitball,
        element: ELEMENTS.Fire
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Corvin",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Uchigatana,
        element: ELEMENTS.Light
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Elma",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Dual_Swords,
        element: ELEMENTS.Dark
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Shulk",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Monado,
        element: ELEMENTS.Light
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    },
    {
        name: "Fiora",
        // gender: "M",
        // species: "Humanoid",
        weaponClass: WEAPON_CLASSES.Knives,
        element: ELEMENTS.Wind
        // role: ROLES.Attacker,
        // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
        // favoriteItems: ["", ""],
        // fieldSkills: [
        //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
        //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
        // ]
        //affinityChart: affinityCharts.Poppi_QTπ
    }
    // {
    //     name: "",
    //     driver: DRIVERS.TORA,
    //     gender: "F",
    //     species: "Humanoid",
    //     weaponClass: WEAPON_CLASSES.Variable_Saber,
    //     element: ELEMENTS.Ice,
    //     // role: ROLES.Attacker,
    //     // favoriteItemTypes: [ITEM_TYPES.Staple_Foods, ITEM_TYPES.Textiles],
    //     // favoriteItems: ["", ""],
    //     // fieldSkills: [
    //     //     { name: FIELD_SKILLS.Keen_Eye, maxLevel: 3 },
    //     //     { name: FIELD_SKILLS.Ancient_Wisdom, maxLevel: 3 },
    //     //     { name: FIELD_SKILLS.Forestry, maxLevel: 3 }
    //     // ]
    //     //affinityChart: affinityCharts.Poppi_QTπ
    // },
];

// template:
// {
//     name: "",
//     gender: "F",
//     species: "Humanoid",
//     weaponClass: WEAPON_CLASSES.Aegis_Sword,
//     element: ELEMENTS.Fire,
//     role: ROLES.Attacker,
//     favoriteItemTypes: [ITEM_TYPES.Veggies, ITEM_TYPES.Literature],
//     favoriteItems: ["", ""],
//     fieldSkills: [
//         { name: FIELD_SKILLS.Fire_Mastery, maxLevel: 3 },
//         { name: FIELD_SKILLS.Focus, maxLevel: 3 },
//         { name: FIELD_SKILLS.Cooking, maxLevel: 3 }
//     ],
//     //affinityChart: affinityCharts.Pyra
// },

module.exports = blades;
