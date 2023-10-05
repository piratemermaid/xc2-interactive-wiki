const _ = require("lodash");
const { Router } = require("express");

const User = require("../db/models/User");
const UserDriver = require("../db/models/UserDriver");
const Driver = require("../db/models/Driver");

const router = new Router();

router.get("/blades", async (req, res, next) => {
    const user = await User.query().findById(1).withGraphFetched("blades");

    res.send(
        user.blades.map(({ name }) => {
            return { name };
        })
    );
});

router.post("/update_team", async (req, res, next) => {
    const { drivers, blades } = req.body;

    await UserDriver.query().delete().where("user_id", 1);

    const driversByName = _.keyBy(await Driver.query(), "name");

    await UserDriver.query().insert(
        drivers.map((name) => {
            return { user_id: 1, driver_id: driversByName[name].id };
        })
    );

    res.status(200).send("Team updated");
});

module.exports = router;
