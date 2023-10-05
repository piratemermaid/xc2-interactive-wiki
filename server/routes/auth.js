const { Router } = require("express");
const { handleGoogleOauth } = require("../controllers/google_oauth");

const router = new Router();

router.get("/", async (req, res, next) => {
    console.log("SLDFJLKSJDF");
    res.send("SLDFJHLSDKJFSLDJFKJSDLFKJDF");
});

router.get("/oauth/google", async (req, res, next) => {
    handleGoogleOauth(req, res);
});

module.exports = router;
