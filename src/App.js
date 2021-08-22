import Login from "./Page/Login"
import  CreatePlaylist  from "./Page/Playlist/index";
import { Provider } from "react-redux";
import store from './redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Router/PrivateRoute';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route excat path='/create-playlist'>
              <PrivateRoute 
              component={CreatePlaylist}
              exact path ='/create-playlist'
              />
            </Route>
          </Switch>
        </Router>         
      </Provider>     
    </div>
  );
}

export default App;
