import React from "react";
import style from "./trackItem.module.css";
type TrackItem = {
    tracks: {
      album: {
        images: {
          [index: number]: {
            url: string;
          };
        };
        name: string;
      };
      name: string;
      artists: {
        [index: number]: {
          name: string;
        };
      };
      uri: string;
    };
    id: string;
    selectUri: Array<string>;
    setSelectUri: (query: string[]) => void;
  };

const Track =({tracks, id,setSelectUri,selectUri }: TrackItem)=>{
    const handleSelect = (id:string) =>{
        const uri:string=id;
        if(selectUri.includes(uri)){
            const newSelectUri:string[] = selectUri.filter ((tracks) => tracks !== uri);
            setSelectUri(newSelectUri);
        }
        else{
            setSelectUri ([...selectUri, uri]);
        }
    };
    return (

        <div className={style.songs} key={id}>
            <div className={style.song}>
                <img className={style.imgWrapper} src={tracks.album.images[1].url} alt={tracks.album.name}></img>
                <div>
                    <div className={style.desc}>
                        <p  className={style.judul}>Title</p>
                        <p>{tracks.name}</p>
                    </div>
                    <div className={style.desc}>
                        <p className={style.judul}>Artist</p>
                        <p>{tracks.artists[0].name}</p>
                    </div>
                    <div className={style.desc}>
                        <p  className={style.judul}>Album</p>
                        <p>{tracks.album.name}</p>
                    </div>
                </div>
            </div>
                <button  className={style.btn} onClick={()=>handleSelect(tracks?.uri)}>{selectUri.includes(tracks.uri)? "Deselect" : "Select"}</button>
        </div>
    )
}
export default Track;