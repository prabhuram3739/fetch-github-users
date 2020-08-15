export const authEndpoint = "https://github.com/login/oauth/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "81d0df957cd571853232";
const scopes = [
    "repo",
];

//Get the access token from the response
export const getTokenFromUrl = () => {
    return window.location.search
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            //#code=mysupersecretkey&name=john&
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const authGitUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&login=prabhuram3739&scope=${scopes.join("%20")}&state=test&allow_signup=true`;