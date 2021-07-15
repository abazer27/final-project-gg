import React from 'react'

function Song(props) {
    return (
        <div className="songs-wrapper">
            <div className="img-song">
                <img src={props.img} alt={props.alt}/>
            </div>
            <p className="song-title">{props.title}</p>
            <p className="song-artist">{props.artist}</p>
            <p className="song-album">{props.album}</p>
        </div>
    )
}

export default Song
