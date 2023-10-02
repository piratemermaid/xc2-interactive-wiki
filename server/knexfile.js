const { db } = require("./secrets");

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            host: "localhost",
            database: db.database,
            user: db.user,
            password: db.password
        },
        migrations: {
            directory: __dirname + "/db/migrations"
        },
        seeds: {
            directory: __dirname + "/db/seeds"
        }
    },

    staging: {
        client: "postgresql",
        connection: {
            database: db.database,
            user: db.user,
            password: db.password
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },

    production: {
        client: "postgresql",
        connection: {
            database: db.database,
            user: db.user,
            password: db.password
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};
