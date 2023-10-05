const { bookshelf } = require("../config");

const { Blade } = require(".");
const TABLES = require("../db/tables");

const User = bookshelf.model("User", {
    tableName: TABLES.USERS,
    blades() {
        return this.belongsToMany("Blade", TABLES.USERS_BLADES);
    }
});

const UserBlades = bookshelf.model("UserBlades", {
    tableName: TABLES.USERS_BLADES,
    user() {
        return this.hasOne("User");
    },
    blade() {
        return this.hasOne("Blade");
    }
});

module.exports = { User };
