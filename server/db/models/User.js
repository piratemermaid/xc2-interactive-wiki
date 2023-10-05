const { Model } = require("objection");
const TABLES = require("../tables");

class User extends Model {
    static get tableName() {
        return TABLES.USERS;
    }

    static get relationMappings() {
        const Blade = require("./Blade");

        return {
            blades: {
                relation: Model.ManyToManyRelation,
                modelClass: Blade,
                join: {
                    from: `${TABLES.USERS}.id`,
                    through: {
                        from: `${TABLES.USERS_BLADES}.user_id`,
                        to: `${TABLES.USERS_BLADES}.blade_id`
                    },
                    to: `${TABLES.BLADES}.id`
                }
            }
        };
    }
}

module.exports = User;
