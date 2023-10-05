const { Model } = require("objection");

const TABLES = require("../tables");

class Blade extends Model {
    static get tableName() {
        return TABLES.BLADES;
    }

    static get relationMappings() {
        const Element = require("./Element");
        const Role = require("./Role");
        const WeaponClass = require("./WeaponClass");

        return {
            element: {
                relation: Model.HasOneRelation,
                modelClass: Element,
                join: {
                    from: `${TABLES.BLADES}.element_id`,
                    to: `${TABLES.ELEMENTS}.id`
                }
            },
            role: {
                relation: Model.HasOneRelation,
                modelClass: Role,
                join: {
                    from: `${TABLES.BLADES}.role_id`,
                    to: `${TABLES.ROLES}.id`
                }
            },
            weaponClass: {
                relation: Model.HasOneRelation,
                modelClass: WeaponClass,
                join: {
                    from: `${TABLES.BLADES}.weapon_class_id`,
                    to: `${TABLES.WEAPON_CLASSES}.id`
                }
            }
        };
    }
}

module.exports = Blade;
