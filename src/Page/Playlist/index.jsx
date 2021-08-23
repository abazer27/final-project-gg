import React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import {createNewPlaylist} from "../../components/Auth/api";
import axios from 'axios';
import { useSelector } from 'react-redux';
import TrackList from 'components/Tracklist';


const CreatePlaylist =() =>{ 
    const [song, setSong] = useState('');
    const [seacrhSong, setSearchSong] = useState([]);
    const [selectUri, setSelectUri] = useState([]);
    const [Create, setCreate] = useState(false);
    const token = useSelector(state => state.token.token)
    const userID = useSelector(state => state.user.user)

    const handleSong=(e) =>{
        setSong(e.target.value)
    }
    const handleGetSearchSong = () => {
        const API_URL = `https://api.spotify.com/v1/search?query=${song}&type=track&limit=12`;
        axios.get(API_URL,{
            headers: {Authorization : 'Bearer ' + token,
        },  
        })
            .then(res =>res.data)
            .then((resData)=> setSearchSong(resData.tracks.items))
            .catch((err)=> console.log(err));
    };

    const handleForm = () => {
        setCreate(!Create);
      };

    const handleCreatePlaylist = async (e) => {
        e.preventDefault();
        if (selectUri.length > 0) {
            createNewPlaylist(e, userID, token, selectUri);
            alert("Playlist Created!");
        } else {
            alert("You need songs to make a playlist, choose some!");
        }
    };
    console.log(selectUri)
        return  <div className={style.content}>
                    <h2>Any Song You Like</h2>
                    <div className={style.left}>
                        <input className={style.search} type="text" value={song} onChange={handleSong} placeholder="Search Song ..."></input>
                        <button className={style.btnSearch} onClick={handleGetSearchSong}>Seacrh</button>
                    </div>  
                    <div>
                        <div>
                            {selectUri.length > 0 && (
                                <div className={style.right}>
                                    <button onClick={handleForm} className={style.btnCreate}>{Create ? "Cancel" : "Create Playlist"}</button>
                                </div>
                            ) }
                        </div>
                        {Create && <div className={style.right}>
                                        <form onSubmit={handleCreatePlaylist}>
                                            <div>
                                                <label className={style.label} htmlFor="title">Title</label>
                                                <input className={style.input} name="title" id="title" type="text" placeholder=". . ." minLength="10" />
                                            </div>
                                            <div>
                                                <label className={style.label} htmlFor="description">Description</label>
                                                <input className={style.inputDes} name="description" id="description" type="text" placeholder=". . ." minLength="20" />
                                            </div>
                                            <button type="submit" className={style.btnSubmit}>Submit</button>
                                        </form>
                            </div>}
                    </div>
                    <div className={style.songsWrapper}>
                        <TrackList
                            seacrhSong={seacrhSong} 
                            selectUri={selectUri}
                            setSelectUri={setSelectUri}
                        />
                    </div>
                </div>
        


           
}

export default CreatePlaylist
