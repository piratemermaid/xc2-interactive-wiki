const { Router } = require("express");

const User = require("../db/models/User");

const router = new Router();

router.get("/blades", async (req, res, next) => {
    const user = await User.query().findById(1).withGraphFetched("blades");

    res.send(
        user.blades.map(({ name }) => {
            return { name };
        })
    );
});

module.exports = router;
