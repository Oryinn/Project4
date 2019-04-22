import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from './components/NavigationBar'
import BeerList from './components/BeerList'
import RecentReviews from "./components/RecentReviews";
import BeerDetail from "./components/BeerDetail"
import UserPage from "./components/UserPage"
import LoginPage from "./components/LoginPage"
import UserList from "./components/UserList"
import EditReview from "./components/EditReview"
import SignUp from "./components/SignUp"
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
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/beers/:beerId" component={BeerDetail} />
            <Route path="/users/:userId" component={UserPage} />
            <Route path="/reviews/:reviewId/edit" component={EditReview} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
