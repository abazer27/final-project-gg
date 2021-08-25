import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

function Player({token, selectUri}) {
    return (
        <div>
            <SpotifyPlayer 
            token ={token}
            showSaveIcon
            uris={selectUri ? [selectUri] :[]}
            />
        </div>
    )
}

export default Player
