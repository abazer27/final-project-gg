import React from 'react';
import Song from './../Songs'
import data from '../../data/albumData'

const Playlist = ()=> {
    return(
            <div className="song-wrapper">
                {data.map((dt, index)=> {
                    return(
                        <Song key={index} img={dt.album.images[1].url} title={dt.name} artist={dt.artists[0].name} album={dt.album.name} />
                    );
                })}
            </div>
    
    )
}

export default Playlist;