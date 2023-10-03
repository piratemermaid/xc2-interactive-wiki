const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res, next) => {
    res.send("Hello API route");
});

module.exports = router;
