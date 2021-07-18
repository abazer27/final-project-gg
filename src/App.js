import './App.css';
import Playlist from "./components/Playlist";
import Header from './components/Header'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Header />
      <Playlist />
      <Button />
    </div>
  );
}

export default App;
