import { useEffect,useState } from 'react'
import axios from 'axios'
import style from './style.module.css'
import Button from '../Button';
import {getReturnedParamsFromSpotifyAuth} from "../../../../components/Auth/auth";

const Contents =() =>{
    const [token, setToken] = useState('');
    const [song, setSong] = useState('');
    const [seacrhSong, setSearchSong] = useState([]);
    const [selectSong, setSelectSong] = useState([]);
    const [selectUri, setSelectUri] = useState([]);
    const [userID, setUserID] = useState("");
    const [Create, setCreate] = useState(false);

    useEffect(()=>{
        if (window.location.hash) {
            const { access_token } = getReturnedParamsFromSpotifyAuth(window.location.hash);
            setToken(access_token);
          }
        },[]);
    useEffect(()=>{
        if(token!== ""){
            getProfile();
        }
        })
    const handleSong=(e) =>{
        setSong(e.target.value)
    }
    // https://api.spotify.com/v1/search?query=tania+bowra&offset=0&limit=20&type=artist",
    const API_URL = `https://api.spotify.com/v1/search?query=${song}&type=track&limit=10`;
    const handleGetSearchSong = () => {
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
    const getProfile = () => {
        axios.get("https://api.spotify.com/v1/me",{
            headers:{Authorization: 'Bearer ' +token,
        },
        }).then((res) => setUserID(res.data.id))
    };
    const handleCreatePlaylist = async e => {
        e.preventDefault();
        if (selectSong.length > 0) {
            createNewPlaylist(e);
            alert("Playlist Created!");
        } else {
            alert("You need songs to make a playlist, choose some!");
        }
    };
    
    const createNewPlaylist = async e => {     
            await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                method: "POST",
                headers: {
                  Authorization: "Bearer " + token,
                },
                body: JSON.stringify({
                  name: e.target[0].value,
                  public: false,
                  collaborative: false,
                  description: e.target[1].value
                })
              })
                .then(res => res.json())
                .then(data => storePlaylist(data.id));
            };
    

    const storePlaylist = async id =>{
        const uri = selectSong.map(T => T.uri);
        await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?position=0&uris=${uri}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        uris: uri,
        position: 0
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
      
        setCreate(false);
        setSelectSong([]);
        };
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

export default Contents
