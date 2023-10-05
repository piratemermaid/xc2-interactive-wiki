const axios = require("axios");
const qs = require("qs");
const { googleOauth } = require("../secrets");
const { knex } = require("../config");
const TABLES = require("../db/tables");

async function getGoogleOAuthTokens({ code }) {
    const url = "https://oauth2.googleapis.com/token";

    const values = {
        code,
        client_id: googleOauth.clientId,
        client_secret: googleOauth.clientSecret,
        redirect_uri: googleOauth.redirectUri,
        grant_type: "authorization_code"
    };

    try {
        const res = await axios.post(url, qs.stringify(values), {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });

        return res.data;
    } catch (error) {
        console.error(error, "Failed to fetch Google Oauth tokens");
        throw new Error(error.message);
    }
}

async function getGoogleUser({ id_token, access_token }) {
    try {
        const res = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&accesstoken=${access_token}`,
            { headers: { Authorization: `Bearer ${id_token}` } }
        );
        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}

async function updateUser(googleUser, res) {
    const user = await knex("users")
        .where({ email: googleUser.email })
        .first()
        .then((row) => row);

    if (!googleUser.verified_email) {
        return res.status(403).send("Google account is not verified");
    }

    if (!user) {
        await knex(TABLES.USERS).insert({ email: googleUser.email });
    }
}

module.exports = { getGoogleOAuthTokens, getGoogleUser, updateUser };
