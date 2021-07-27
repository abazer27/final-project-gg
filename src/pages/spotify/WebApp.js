import React from 'react'
import "./WebApp.css";
import { useEffect } from 'react';
import Contents from './components/Content';

// GET https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=token&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09


const CLIENT_ID = "e1a4d0707608419f85aa0615e91585c7";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/";
const SPACE_DELIMITER = "20%";
const SCOPE = ["playlist-modify-private"];
const SCOPE_URL_PARAM = SCOPE.join(SPACE_DELIMITER)

// Get access token
// http://localhost:3000/#access_token=BQDAOR1iu1-BUNBHBP27GbTnnJHcL8K0TyUFDcJSngItZRIShTyWw80vvoFe4cdokEVZlCZqQxvC3a7jOw7z4rf3AGKFO0QoL_h-ZcUTXdezxDOyVeGGDFp2Cc__r_C0GQb8p74C185EEMwhj40XU2qxN56QzYtaPGe073F2pbQcnndp1wfUau9CmGr-KUY&token_type=Bearer&expires_in=3600

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

function WebApp(){

    useEffect(() => {
        if (window.location.hash){
            const {access_token, token_type, expires_in} =
            getReturnedParamsFromSpotifyAuth(window.location.hash);

            localStorage.clear();
            localStorage.setItem('accessToken', access_token);
            localStorage.setItem('tokenType', token_type);
            localStorage.setItem('expireIn', expires_in);
        }
    })
    const handleLogin = () =>{
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE_URL_PARAM}&show_dialog=true`;
    }
    return (
        <div className="container">
            <h1 className="title">Spotify<span className="dot">.</span></h1>
            <button className="btn auth" onClick={handleLogin}> Get Spotify Auth </button>
            <Contents />
        </div>
    )
}

export default WebApp
