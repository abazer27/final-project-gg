const getProfile = (token) => {
    return fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: "Bearer " + token,
        },
        })
          .then((res) => res.json());
};

const createNewPlaylist = async (e,userID,token,selectSong) => {   
    const uri = selectSong.map(T => T.uri);
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
        .then(data => storePlaylist(data.id, token,uri));
    };


const storePlaylist = async (id,token,uri) =>{
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
    };


export {storePlaylist,createNewPlaylist,getProfile}