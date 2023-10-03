const { Router } = require("express");

const { knex } = require("../config");
const TABLES = require("../db/tables");
const { Blade } = require("../models");

const router = new Router();

router.get("/blades", async (req, res, next) => {
    const bladesQuery = await Blade.fetchAll({
        withRelated: ["element", "role", "weaponClass"]
    });
    const blades = bladesQuery.toJSON();

    res.send(
        blades.map((blade) => {
            return {
                name: blade.name,
                gender: blade.gender,
                species: blade.species,
                element: blade.element.name,
                role: blade.role.name,
                weaponClass: blade.weaponClass.name,
                affinityChart: blade.affinity_chart
            };
        })
    );
});

module.exports = router;
