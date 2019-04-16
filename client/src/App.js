import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>test</h1>
          <Switch>
            <Route exact path="" component={Home} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
