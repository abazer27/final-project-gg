import React from "react";
import Track from "./Track";

const TrackList = ({ seacrhSong, selectUri, setSelectUri}) => {
  return seacrhSong.map((tracks, id) => {
    return (
            <Track
              key={tracks.id}
              tracks={tracks}
              id={id}
              selectUri={selectUri}
              setSelectUri={setSelectUri}
            />    
    );
  });
};

export default TrackList;
