const CLIENT_ID = "e1a4d0707608419f85aa0615e91585c7";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/";
const SPACE_DELIMITER = "%20";
const SCOPE = ["user-read-email","playlist-modify-private"];
const SCOPE_URL_PARAM = SCOPE.join(SPACE_DELIMITER)

const getReturnedParamsFromSpotifyAuth = (hash) =>{
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulator[key] = value;
        return accumulator;
    },{});

    return paramsSplitUp;

};

const handleLogin = () =>{
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE_URL_PARAM}&show_dialog=true`;
}




export {getReturnedParamsFromSpotifyAuth, handleLogin}