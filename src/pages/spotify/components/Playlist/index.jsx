import { useEffect,useState } from 'react'
import axios from 'axios'

const Playlist =() =>{
    const [token, setToken] = useState('');
    const [song, setSong] = useState('');
    const [seacrhSong, setSearchSong] = useState([]);

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
console.log(seacrhSong)
        return  <div>  
                    <input type="text" value={song} onChange={handleSong} placeholder="Search Song ..."></input>
                    <button onClick={handleGetSearchSong}> S E A R C H </button>
                    <div>{seacrhSong.map((tracks,index)=>{
                        return(
                            <div >
                                <img key={index} src={tracks.album.images[1].url}></img>
                                <p>{tracks.artists[0].name}</p>
                                <p>{tracks.album.name}</p>
                                <button>S E L E C T</button>
                            </div>
                        )
                    })}

                    </div>
                </div>
        


           
}

export default Playlist
