import './App.css';
import data from './data/albumData.js'
import Song from './components/Songs'
function App() {
  return (
    <div className="App">
      <div className="playlist">
        <Song />
      </div>
    </div>
  );
}

export default App;
