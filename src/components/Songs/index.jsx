import React from 'react';
import style from './style.module.css';

function Song(props) {
    return (
        <div className={style.songWrapper}>
            <div className={style.imgWrapper}>
                <img  className={style.imgSong} src={props.img} alt={props.alt}/>
            </div>
            <div className={style.info}>
                <p className="song-title">{props.title}</p>
                <p className="song-artist">{props.artist}</p>
                <p className="song-album">{props.album}</p>
            </div>
        </div>
    )
}
Song.defaultProps ={
    img : "-",
    alt : "-",
    title : "Title",
    artist : "Artist",
    album : "Album"
}

export default Song
