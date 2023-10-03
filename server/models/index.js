const { bookshelf } = require("../config");

const TABLES = require("../db/tables");

const Blade = bookshelf.model("Blade", {
    tableName: TABLES.BLADES,
    element() {
        return this.belongsTo("Element");
    },
    role() {
        return this.belongsTo("Role");
    },
    weaponClass() {
        return this.belongsTo("WeaponClass");
    }
});

const Element = bookshelf.model("Element", {
    tableName: TABLES.ELEMENTS,
    blade() {
        return this.hasOne("Blade");
    }
});

const Role = bookshelf.model("Role", {
    tableName: TABLES.ROLES,
    blade() {
        return this.hasOne("Blade");
    }
});

const WeaponClass = bookshelf.model("WeaponClass", {
    tableName: TABLES.WEAPON_CLASSES,
    blade() {
        return this.hasOne("Blade");
    }
});

module.exports = { Blade };
