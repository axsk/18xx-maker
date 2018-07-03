import React, { Component } from "react";

import "./App.css";

import SVG from "./Svg";

import Charters from "./Charters";
import Game from "./Game";
import Games from "./Games";
import Privates from "./Privates";
import Shares from "./Shares";
import Stock from "./Stock";
import Trains from "./Trains";
import Tokens from "./Tokens";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Games} />
          <Route exact path="/:game" component={Game} />
          <Route path="/:game/tiles" component={SVG} />
          <Route path="/:game/trains" component={Trains} />
          <Route path="/:game/tokens" component={Tokens} />
          <Route path="/:game/shares" component={Shares} />
          <Route path="/:game/charters" component={Charters} />
          <Route path="/:game/privates" component={Privates} />
          <Route path="/:game/stock" component={Stock} />
        </div>
      </Router>
    );
  }
}

export default App;
