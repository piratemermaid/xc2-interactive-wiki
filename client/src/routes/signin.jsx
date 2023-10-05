const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
const options = {
    redirect_uri: import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT_URI,
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ].join(" ")
};
const queryString = new URLSearchParams(options);
const GOOGLE_OAUTH_URL = `${rootUrl}?${queryString}`;

export default function Signin() {
    return (
        <div>
            <h2>Sign In</h2>
            <a href={GOOGLE_OAUTH_URL}>Log In with Google</a>
        </div>
    );
}
