import React from "react";
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
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
