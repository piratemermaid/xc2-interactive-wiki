const { Router } = require("express");

const { knex } = require("../config");
const TABLES = require("../db/tables");
const { Blade } = require("../models");
const { User } = require("../models/User");

const router = new Router();

router.get("/blades", async (req, res, next) => {
    const usersQuery = await User.forge({
        id: 1
    }).fetch({ withRelated: ["blades"] });
    const userBlades = usersQuery.toJSON();

    res.send(
        userBlades.blades.map(({ name }) => {
            return { name };
        })
    );
});

module.exports = router;
