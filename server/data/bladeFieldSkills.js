const blades = require("./blades");

let bladeFieldSkills = [];

for (let blade of blades) {
    for (fieldSkill of blade.fieldSkills) {
        bladeFieldSkills.push({
            blade: blade.name,
            fieldSkill: fieldSkill.name,
            maxLevel: fieldSkill.maxLevel
        });
    }
}

module.exports = bladeFieldSkills;
