import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import BooksState from "./context/Books/BooksState";
import ArticlesState from "./context/Articles/ArticlesState";
import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/Alert/AlertState";
import CollectionsState from "./context/Collections/CollectionsState";
import VideosState from "./context/videos/VideosState";
import Collections from "./Components/Collections";
import Navbar from "./Components/Navbar";
import BookSearch from "./Components/BookSearch";
import Login from "../src/Components/Auth/Login";
import Register from "../src/Components/Auth/Register";
import setToken from "./utils/setToken";
import Alerts from "./Components/Alerts/alerts";
import About from "./Components/About";
import "./App.css";

if (localStorage.token) {
  setToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <CollectionsState>
        <AlertState>
          <VideosState>
            <BooksState>
              <ArticlesState>
                <Router>
                  <Navbar />
                  <div className='container-fluid'>
                    <Alerts />
                    <Switch>
                      <Route exact path='/' component={BookSearch} />
                      <Route
                        exact
                        path='/collections'
                        component={Collections}
                      />
                      <Route exact path='/login' component={Login} />
                      <Route exact path='/register' component={Register} />
                      <Route exact path='/about' component={About} />
                    </Switch>
                  </div>
                </Router>
              </ArticlesState>
            </BooksState>
          </VideosState>
        </AlertState>
      </CollectionsState>
    </AuthState>
  );
}

export default App;
