import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import BooksState from "./context/Books/BooksState";
import ArticlesState from "./context/Articles/ArticlesState";
import VideosState from "./context/videos/VideosState";
import Collections from "./Collections";
import Navbar from "./Navbar";
import Login from "./Login";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <VideosState>
      <BooksState>
        <ArticlesState>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/collections' component={Collections} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </Router>
        </ArticlesState>
      </BooksState>
    </VideosState>
  );
}

export default App;
