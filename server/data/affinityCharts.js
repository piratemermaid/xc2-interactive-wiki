const unlocked = { task: "unlocked" };

const affinityCharts = {
    Pyra: {
        keyAffinity: {
            1: unlocked,
            2: { task: "Increase Trust", count: 100 },
            3: { task: "Increase Trust", count: 1600 },
            4: { task: "Increase Trust", count: 4600 },
            5: { task: "Increase Trust", count: 10600 }
        },
        // Flame Nova
        bladeSpecial1: {
            1: unlocked,
            2: {
                task: "Defeat Feris enemies in Gormott (Excludes unique monsters)",
                count: 6
            },
            3: { task: "Use Flame Nova", count: 11 },
            4: { task: "Perform a Blade Combo", count: 10 },
            5: { task: "Defeat a Vay Taos at the World Tree", count: 4 }
        },
        // Prominence Revolt
        bladeSpecial2: {
            1: unlocked,
            2: { task: "Use Prominence Revolt", count: 7 },
            3: { task: "Defeat a Bafoo Crustip in Mor Ardain", count: 5 },
            4: { task: "Use Prominence Revolt", count: 9 },
            5: { task: "Use Prominence Revolt", count: 10 }
        },
        // Blazing End
        bladeSpecial3: {
            1: unlocked,
            2: { task: "Perform a Blade Combo", count: 5 },
            3: { task: "Use Blazing End", count: 6 },
            4: { task: "Defeat a Skad Taos in Leftheria", count: 4 },
            5: { task: "Use Blazing End", count: 8 }
        },
        // Purifying Flames
        battleSkill1: {
            1: { task: "Use a Blade Art", count: 3 },
            2: { task: "Help an incapacitated ally", count: 10 },
            3: {
                task: `Speak to Pyra at Corinne's House in Leftheria to view the Heart-to-Heart "By the Graveside".`
            },
            4: { task: "Use a Blade Art", count: 7 },
            5: {
                task: "Swap Blades during battle (Previous instances count toward total)",
                count: 4000
            }
        },
        // Resplendence
        battleSkill2: {
            1: { task: "Perform a Blade Combo", count: 2 },
            2: {
                task: "Perform a Driver Combo (It's enough to just be present)",
                count: 5
            },
            3: { task: "Deal a critical hit", count: 7 },
            4: {
                task: `In Argentum, view the Heart-to-Heart "Mòrag the Chef".`
            },
            5: {
                task: "Perform a Driver Combo (It's enough to just be present)",
                count: 12
            }
        },
        // Flaming Edge
        battleSkill3: {
            1: unlocked,
            2: { task: "Deal a critical hit", count: 5 },
            3: {
                task: "Walk a lot (Previous instances count toward total)",
                count: 80000
            },
            4: { task: "Evade an attack", count: 9 },
            5: { task: "Perform a Blade Combo", count: 12 }
        },
        // Fire Mastery
        fieldSkill1: {
            1: unlocked,
            2: {
                task: "Discover an area (Previous instances count toward total)",
                count: 12
            },
            3: null,
            4: {
                task: "Collect stuff (Previous instances count toward total)",
                count: 25
            },
            5: null
        },
        // Focus
        fieldSkill2: {
            1: unlocked,
            2: null,
            3: {
                task: "Use Pyra's favorite pouch item from the Drinks category",
                count: 4
            },
            4: null,
            5: {
                task: "Succeed in a button challenge during a battle (Previous instances count toward total)",
                count: 100
            }
        },
        // Cooking
        fieldSkill3: {
            1: unlocked,
            2: null,
            3: {
                task: "Make food (Previous instances count toward total)",
                count: 10
            },
            4: null,
            5: {
                task: "Make food (Previous instances count toward total)",
                count: 50
            }
        }
    }
};

// thing:{
//     1: { task: "", count: 10},
//     2: { task: "", count: 10},
//     3: { task: "", count: 10},
//     4: { task: "", count: 10},
//     5: { task: "", count: 10},
// },

module.exports = affinityCharts;
