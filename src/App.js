import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Jobs from "./components/jobs";
import ProfileContainer from "./components/Profile/container";
import DashboardContainer from "./components/DashBoard/container";
import Home from "./components/Home";
import XYZ from './components/xyz'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dash" component={DashboardContainer} />
          <Route path="/jobs " component={Jobs} />
		  <Route path='/xyz'component={XYZ}/>
          <Route path="/profile" component={ProfileContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
