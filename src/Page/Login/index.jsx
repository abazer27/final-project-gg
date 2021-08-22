import React from 'react'
import {handleLogin} from '../../components/Auth/auth';
import { useEffect } from 'react';
import { getReturnedParamsFromSpotifyAuth } from '../../components/Auth/auth';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { storeToken } from '../../redux/tokenSlice';
import { storeUser } from '../../redux/userSlice';
import { getProfile } from '../../components/Auth/api';

function Login() {
    const token = useSelector(state => state.token.token)
    const dispatch = useDispatch();
    useEffect(() => {
        if (window.location.hash) {
        const access_token = getReturnedParamsFromSpotifyAuth(window.location.hash);
        dispatch(storeToken(access_token.access_token));
        getProfile(token).then((data)=>dispatch(storeUser(data.id)));
        }
    }, [dispatch,token]);
    return (
        <div>
            <h1 className="title">Spotify<span className="dot">.</span></h1>
            <h2>Halama Login</h2>
            <button className="btn auth" onClick={handleLogin}> Get Spotify Auth </button>
            <Link to="/create-playlist"> Create Playlist</Link>
        </div>
    )
}

export default Login


