const jwt = require("jsonwebtoken");

function signJwt(object, options) {
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: "RS256"
    });
}

module.exports = { signJwt };
