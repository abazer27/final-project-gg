import { useEffect,useState } from 'react'
import axios from 'axios'
import style from './style.module.css'
import Button from '../Button';

const Contents =() =>{
    const [token, setToken] = useState('');
    const [song, setSong] = useState('');
    const [seacrhSong, setSearchSong] = useState([]);
    const [selectSong, setSelectSong] = useState([]);
    const [selectUri, setSelectUri] = useState([]);

    useEffect(()=>{
        if (localStorage.getItem('accessToken')){
            setToken(localStorage.getItem('accessToken'));
        }
    },[]);
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
    // const handleDeselect = data =>{
    //     setSelectSong(selectSong.splice(data));
    //     setSelectUri(selectUri.splice(data.uri));
    
    console.log(selectSong);
    console.log(selectUri)
        return  <div >  
                    <input type="text" value={song} onChange={handleSong} placeholder="Search Song ..."></input>
                    <button onClick={handleGetSearchSong}> S E A R C H </button>
                    <div>{seacrhSong.map((tracks,id)=>{
                        return(
                            <div className={style.songWrapper} key={id}>
                                <img className={style.imgWrapper} src={tracks.album.images[1].url} alt={tracks.album.name}></img>
                                <p>{tracks.artists[0].name}</p>
                                <p>{tracks.name}</p>
                                <p>{tracks.album.name}</p>
                                <Button handleSelect={()=>handleSelect(tracks)} value={selectUri.includes(tracks.uri)? "Deselect" : "Select"}/>
                            </div>
                        )
                    })}

                    </div>
                </div>
        


           
}

export default Contents
