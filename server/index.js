var express = require("express");
var app = express();

const authRouter = require("./routes/auth");
const appDataRouter = require("./routes/appData");
const userDataRouter = require("./routes/userData");

app.use("/auth", authRouter);
app.use("/app", appDataRouter);
app.use("/user_data", userDataRouter);

app.listen(3000, function () {
    console.log("App listening on port 3000");
});
