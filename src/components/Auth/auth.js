const CLIENT_ID = "ba4fd03d3ff248909daf9e0aee14d1a4";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "https://generasi-gigih-homework-akbarhazura.vercel.app/";
const SPACE_DELIMITER = "%20";
const SCOPE = ["user-read-email","playlist-modify-private","user-read-private","user-library-modify","user-library-read","streaming","user-read-playback-state","user-modify-playback-state"];
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
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URL_AFTER_LOGIN)}&scope=${SCOPE_URL_PARAM}&show_dialog=true`;
}
export {handleLogin,getReturnedParamsFromSpotifyAuth}
