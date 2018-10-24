import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Jobs from "./components/jobs/jobs";
import ProfileContainer from "./components/Profile/container";
import DashboardContainer from "./components/DashBoard/container";
import Home from "./components/Home";
import XYZ from './components/xyz'
import Router from './routing'
import SidebarExampleVisible from './components/commons/sidebar'

class App extends Component {
  render() {
    return (
      <Router/>
    );
  }
}

export default App;
