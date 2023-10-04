const blades = require("./blades");

let bladeFavoriteItemTypes = [];
let bladeFavoriteItems = [];
let bladeFieldSkills = [];

for (let blade of blades) {
    if (blade.favoriteItems) {
        for (item of blade.favoriteItems) {
            bladeFavoriteItems.push({ blade: blade.name, item });
        }
    }

    if (blade.favoriteItemTypes) {
        for (itemType of blade.favoriteItemTypes) {
            bladeFavoriteItemTypes.push({ blade: blade.name, itemType });
        }
    }

    if (blade.fieldSkills) {
        for (fieldSkill of blade.fieldSkills) {
            bladeFieldSkills.push({
                blade: blade.name,
                fieldSkill: fieldSkill.name,
                maxLevel: fieldSkill.maxLevel
            });
        }
    }
}

module.exports = {
    bladeFavoriteItemTypes,
    bladeFavoriteItems,
    bladeFieldSkills
};
