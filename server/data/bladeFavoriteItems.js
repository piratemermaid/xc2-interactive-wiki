const blades = require("./blades");

let bladeFavoriteItemTypes = [];
let bladeFavoriteItems = [];

for (let blade of blades) {
    for (item of blade.favoriteItems) {
        bladeFavoriteItems.push({ blade: blade.name, item });
    }

    for (itemType of blade.favoriteItemTypes) {
        bladeFavoriteItemTypes.push({ blade: blade.name, itemType });
    }
}

module.exports = { bladeFavoriteItemTypes, bladeFavoriteItems };
