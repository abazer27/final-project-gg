// import axios from "axios";
// import { useEffect, useState } from "react"
// import {getReturnedParamsFromSpotifyAuth} from "../../../../components/Auth/auth"

//   const CreatePlaylist =()=>{
//     const [token, setToken] = useState('');
//     const [newPlaylist, setNewPlaylist]= useState([]);
//     const [userID, setUserID] = useState("");
//     const [postNewPlaylist, setPostNewPlaylist]= useState({
//         name:'',
//         description:'',
//         public:false,
//         collaborative: false,
//     });
//     useEffect(()=>{
//       if (window.location.hash) {
//           const { access_token } = getReturnedParamsFromSpotifyAuth(window.location.hash);
//           setToken(access_token);
//         }
//       }, [getReturnedParamsFromSpotifyAuth]);

//     useEffect(()=>{
//       if(token!== ""){
//         getProfile();
//       }
//     })
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setPostNewPlaylist({ ...postNewPlaylist, [name]: value });
//     };
    
//     const getProfile = () => {
//       axios.get("https://api.spotify.com/v1/me",{
//           headers:{Authorization: 'Bearer ' +token,
//       },
//       }).then((res) => setUserID(res.data.id))
//   };
//     const createNewPlaylist = (playlist) => {
//         axios.post(`https://api.spotify.com/v1/users/${userID}/playlists`,{
//             headers:{
//               "Content-Type": "application/json",
//               Authorization :'Bearer ' + token,
//         },
//         body: JSON.stringify({
//             name: playlist.name,
//             public: false,
//             collaborative: false,
//             description: playlist.description,
//           }),
//         })
//         .then((res) => res.json())
//         .then((data) => storePlaylist(data.id));
//     };

//     const storePlaylist = (playlistID) =>{
//         const uri = newPlaylist.map((track) => track);

//         axios.post(`https://api.spotify.com/v1/playlists/${playlistID}/tracks?position=0&uris=${uri}`,{
//             headers: {
//                 Authorization: "Bearer " + token,
//                 "Content-Type": "application/json",
//               },
//                 body: JSON.stringify({
//                 uris: uri,
//                 position: 0,
//               }),
//             }
//           )
//             .then((res) => res.json())
//             .then((data) => console.log(data));
      
//           setNewPlaylist([]);
//           setPostNewPlaylist({
//             name: "",
//             description: "",
//             public: false,
//             collaborative: false,
//           });
//           alert("Create Playlist berhasil");
//         };
//         const handleFormSubmit = (e) => {
//             e.preventDefault();
//             createNewPlaylist(postNewPlaylist);
//           };

//     return (
//             <div>
//               <div>
//                 <form onSubmit={handleFormSubmit}>
//                   <label>Name Playlist</label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     minLength="10"
//                     value={postNewPlaylist.name}
//                     onChange={handleChange}
//                   />
//                   <label>Description</label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     minLength="20"
//                     onChange={handleChange}
//                   ></textarea>
//                   <button type="submit">Create Playlist</button>
//                 </form>
//               </div>
//             </div>
//             )
// }
// export default CreatePlaylist