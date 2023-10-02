const blades = require("./blades");

let bladeFavoriteItemTypes = [];
let bladeFavoriteItems = [];
let bladeFieldSkills = [];

for (let blade of blades) {
    for (item of blade.favoriteItems) {
        bladeFavoriteItems.push({ blade: blade.name, item });
    }

    for (itemType of blade.favoriteItemTypes) {
        bladeFavoriteItemTypes.push({ blade: blade.name, itemType });
    }

    for (fieldSkill of blade.fieldSkills) {
        bladeFieldSkills.push({
            blade: blade.name,
            fieldSkill: fieldSkill.name,
            maxLevel: fieldSkill.maxLevel
        });
    }
}

module.exports = {
    bladeFavoriteItemTypes,
    bladeFavoriteItems,
    bladeFieldSkills
};
