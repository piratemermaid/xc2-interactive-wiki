var express = require("express");
var app = express();

const appDataRouter = require("./routes/appData");
const authRouter = require("./routes/auth");

app.use("/app", appDataRouter);
app.use("/auth", authRouter);

app.listen(3000, function () {
    console.log("App listening on port 3000");
});
