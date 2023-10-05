const jwt = require("jsonwebtoken");

const { getGoogleOAuthTokens, updateUser } = require("../services/user");
const { createSession } = require("../services/session");

async function createUserSession() {
    //
}

async function getUserSession() {
    //
}

async function deleteUserSession() {
    //
}

async function handleGoogleOauth(req, res) {
    const { code } = req.query;

    const { id_token, access_token } = await getGoogleOAuthTokens({ code });

    const user = jwt.decode(id_token);

    await updateUser(user, res);

    // create session
    // const session = await createSession(user.id, req.qet("user-agent") ?? "");

    // create access & refresh tokens
    // const accessToken = signJwt(
    //     { ...user, session: session._id },
    //     { expiresIn: config.get("accessTokenTtl") }
    // );

    // const refreshToken = signJwt(
    //     { ...user, session: session._id },
    //     { expiresIn: config.get("refreshTokenTtl") }
    // );

    // set cookies
    res.cookie("accessToken", accessToken, {
        maxAge: 900000, // 15 mins
        httpOnly: true,
        domain: "localhost",
        path: "/",
        sameSite: "strict",
        secure: false
    });

    res.cookie("refreshToken", refreshToken, {
        maxAge: 3.154e10, // 1 year
        httpOnly: true,
        domain: "localhost",
        path: "/",
        sameSite: "strict",
        secure: false
    });

    return res.send({ accessToken: "123", refreshToken: "123" });
}

//  async function (){

// }

//  async function (){

// }

module.exports = { handleGoogleOauth };
