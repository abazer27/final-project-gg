import React from 'react'
import { useEffect,useState } from 'react'
import style from './style.module.css'
import Button from '../../components/ButtonSelect';
import { getReturnedParamsFromSpotifyAuth } from '../../components/Auth/auth';
import {createNewPlaylist, getProfile} from "../../components/Auth/api";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { storeUser } from '../../redux/userSlice';
import { storeToken } from '../../redux/tokenSlice';

const CreatePlaylist =() =>{ 
    const [song, setSong] = useState('');
    const [seacrhSong, setSearchSong] = useState([]);
    const [selectSong, setSelectSong] = useState([]);
    const [selectUri, setSelectUri] = useState([]);
    const [Create, setCreate] = useState(false);
    const token = useSelector(state => state.token.token)
    const userID = useSelector(state => state.user.user)

    const handleSong=(e) =>{
        setSong(e.target.value)
    }
    const handleGetSearchSong = () => {
        const API_URL = `https://api.spotify.com/v1/search?query=${song}&type=track&limit=10`;
        axios.get(API_URL,{
            headers: {Authorization : 'Bearer ' + token,
        },  
        })
            .then(res =>res.data)
            .then((resData)=> setSearchSong(resData.tracks.items))
            .catch((err)=> console.log(err));
    };

    const handleSelect = data =>{
        const uri=data.uri;
        if(selectUri.includes(uri)){
            const newSelectUri= selectUri.filter (s => s !== uri);
            const newSelectSong= selectSong.filter (s => s.uri !==uri);
            setSelectUri(newSelectUri);
            setSelectSong(newSelectSong);
        }
        else{
            setSelectSong ([data, ...selectSong]);
            setSelectUri ([data.uri, ...selectUri]);
        }
    }
    const handleForm = () => {
        setCreate(!Create);
      };

    const handleCreatePlaylist = async (e) => {
        e.preventDefault();
        if (selectSong.length > 0) {
            createNewPlaylist(e, userID, token, selectSong);
            alert("Playlist Created!");
        } else {
            alert("You need songs to make a playlist, choose some!");
        }
    };
    console.log(token)
    console.log(userID)
        return  <div>  
                    <input type="text" value={song} onChange={handleSong} placeholder="Search Song ..."></input>
                    <button onClick={handleGetSearchSong}> S E A R C H </button>
                    <div>
                        <div >
                            {selectSong.length > 0 && (
                                <div>
                                    <button onClick={handleForm}>{Create ? "Cancel" : "Create Playlist"}</button>
                                </div>
                            ) }
                        </div>
                        {Create && <div>
                                        <form onSubmit={handleCreatePlaylist}>
                                            <div>
                                                <label htmlFor="title">Title: </label>
                                                <input name="title" id="title" type="text" placeholder="Title..." minLength="10" />
                                            </div>
                                            <div>
                                                <label htmlFor="description">Description: </label>
                                                <input name="description" id="description" type="text" placeholder="Desc..." minLength="20" />
                                            </div>
                                            <button type="submit">Submit</button>
                                        </form>
                            </div>}
                    </div>
                            <div>{seacrhSong.map((tracks,id)=>{
                                return(
                                    <div className={style.songWrapper} key={id}>
                                        <img className={style.imgWrapper} src={tracks.album.images[1].url} alt={tracks.album.name}></img>
                                        <p className={style.description}>{tracks.artists[0].name}</p>
                                        <p className={style.description}>{tracks.name}</p>
                                        <p className={style.description}>{tracks.album.name}</p>
                                        <Button handleSelect={()=>handleSelect(tracks)} value={selectUri.includes(tracks.uri)? "Deselect" : "Select"}/>
                                    </div>
                                )
                            })}

                    </div>
                </div>
        


           
}

export default CreatePlaylist
