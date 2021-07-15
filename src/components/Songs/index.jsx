import React from 'react'
import data from '../../data/albumData'

function Song() {
    return (
        <div>
            <img src={data.album.images[0].url} alt="album"/>
            <p className="song-title">{data.name}</p>
            <p className="song-artist">{data.artists[0].name}</p>
            <p className="song-album">{data.album.name}</p>
        </div>
    )
}

export default Song
