const express = require("express");
const bodyParser = require("body-parser");

const setupDb = require("./config");
const authRouter = require("./routes/auth");
const appDataRouter = require("./routes/appData");
const userDataRouter = require("./routes/userData");

setupDb();

const app = express();

app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/app", appDataRouter);
app.use("/user_data", userDataRouter);

app.listen(3000, function () {
    console.log("App listening on port 3000");
});
