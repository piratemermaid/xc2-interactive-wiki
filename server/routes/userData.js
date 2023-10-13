const _ = require("lodash");
const { Router } = require("express");

const User = require("../db/models/User");
const UserDriver = require("../db/models/UserDriver");
const Driver = require("../db/models/Driver");
const Blade = require("../db/models/Blade");
const UserBlade = require("../db/models/UserBlade");

const router = new Router();

router.get("/blades", async (req, res, next) => {
    const user = await User.query().findById(1).withGraphFetched("blades");

    res.send(
        user.blades.map(({ name }) => {
            return { name };
        })
    );
});

router.post("/update_team_driver", async (req, res, next) => {
    const { driver } = req.body;

    const driverData = await Driver.query().where({ name: driver }).first();
    const userDriver = await UserDriver.query()
        .where({
            user_id: 1,
            driver_id: driverData.id
        })
        .first();

    if (userDriver) {
        try {
            await UserDriver.query().delete().where({
                user_id: 1,
                driver_id: driverData.id
            });

            res.send("Team driver updated");
        } catch (error) {
            console.error(error.message);
        }
    } else {
        try {
            await UserDriver.query().insert({
                user_id: 1,
                driver_id: driverData.id
            });
            res.send("Team driver updated");
        } catch (error) {
            console.error(error.message);
        }
    }
});

router.post("/update_team_blade", async (req, res, next) => {
    const { blade } = req.body;

    const bladeData = await Blade.query().where({ name: blade }).first();
    const userBlade = await UserBlade.query()
        .where({
            user_id: 1,
            blade_id: bladeData.id
        })
        .first();

    try {
        await UserBlade.query().where({ blade_id: bladeData.id }).update({
            user_id: 1,
            is_on_team: !userBlade.is_on_team
        });

        res.send("Team blade updated");
    } catch (error) {
        console.error(error.message);
    }
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
