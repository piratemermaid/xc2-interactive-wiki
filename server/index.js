var express = require("express");
var app = express();

const appDataRouter = require("./routes/appData");

app.use("/app", appDataRouter);

app.listen(3000, function () {
    console.log("App listening on port 3000");
});
