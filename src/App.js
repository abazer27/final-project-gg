import './App.css';
import data from './data/albumData.js'

function App() {
  return (
    <div className="App">
      <div className="playlist">
        <img src={data.album.images[0].url} alt="album"/>
        <div className="songs">
          <p className="song-title">{data.name}</p>
          <p className="song-artist">{data.artists[0].name}</p>
          <p className="song-album">{data.album.name}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
