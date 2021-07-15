import React from 'react';
import Song from './../Songs'
import data from '../../data/albumData'

const Playlist = ()=> {
    return(
    <Song img={data.album.images[0].url} title={data.name} artist={data.artists[0].name} album={data.album.name} />
    )
}

export default Playlist;