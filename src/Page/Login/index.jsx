import React from 'react'
import {handleLogin} from '../../components/Auth/auth';
import { useEffect } from 'react';
import { getReturnedParamsFromSpotifyAuth } from '../../components/Auth/auth';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { storeToken } from '../../redux/tokenSlice';
import { storeUser } from '../../redux/userSlice';
import { getProfile } from '../../components/Auth/api';
import style from './style.module.css';

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
        <div className={style.contentWrapper}>
            <div className={style.left}>              
                    <h2>Find Your New Song Here</h2>
                    <h3>Music Complete You</h3>
                <div className={style.btn}>
                    <button className={style.btnAuth} onClick={handleLogin}> Get Spotify Auth </button>
                </div>
            </div>
            <div className={style.right}>
                <Link to="/create-playlist" className={style.linkTag}> Create Playlist</Link>
            </div>
        </div>
    )
}

export default Login


