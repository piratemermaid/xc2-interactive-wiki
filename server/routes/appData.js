const { Router } = require("express");

const Blade = require("../db/models/Blade");

const router = new Router();

router.get("/blades", async (req, res, next) => {
    const blades = await Blade.query()
        .withGraphFetched("element")
        .withGraphFetched("role")
        .withGraphFetched("weaponClass");
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
