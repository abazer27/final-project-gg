import React from 'react'
import "./WebApp.css";
import Contents from './components/Content';
import {handleLogin} from '../../components/Auth/auth';
import { Provider } from 'react-redux';
import store from '../../redux/store';
function WebApp(){
    return (
        <div className="container">
            <h1 className="title">Spotify<span className="dot">.</span></h1>
            <button className="btn auth" onClick={handleLogin}> Get Spotify Auth </button>
            <Provider store={store}> 
                <Contents />
            </Provider>
        </div>
    )
}


export default WebApp
