import React from 'react'
import "./WebApp.css";
import Contents from './components/Content';
import {handleLogin} from '../../components/Auth/auth';
function WebApp(){
    return (
        <div className="container">
            <h1 className="title">Spotify<span className="dot">.</span></h1>
            <button className="btn auth" onClick={handleLogin}> Get Spotify Auth </button>
            <Contents />
        </div>
    )
}


export default WebApp
