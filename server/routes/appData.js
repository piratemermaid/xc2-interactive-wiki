const { Router } = require("express");

const { knex } = require("../config");
const TABLES = require("../db/tables");

const router = new Router();

router.get("/blades", async (req, res, next) => {
    const blades = await knex(TABLES.BLADES);

    res.send(blades);
});

module.exports = router;
