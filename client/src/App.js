import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from './components/NavigationBar'
import BeerList from './components/BeerList'
import RecentReviews from "./components/RecentReviews";
import BeerDetail from "./components/BeerDetail"

class App extends Component {

  
  render() {
    return (
      <Router>
        <NavigationBar />
        <div className="notNavigation">
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={BeerList} />
            <Route exact path="/reviews" component={RecentReviews} />
            <Route path="/beers/:beerId" component={BeerDetail} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
