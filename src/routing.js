import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeContainer from './components/Home'
import DashboardContainer from './components/DashBoard/dashboard';
import JobsContainer from './components/jobs/jobs';
import XYZContainer from './components/xyz';
import ProfileContainer from './components/Profile/profile'

const Router = ()=>(
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/dash" component={DashboardContainer} />
          <Route path="/jobs " component={JobsContainer} />
		      <Route path='/xyz'component={XYZContainer}/>
          <Route path="/profile" component={ProfileContainer} />
        </Switch>
      </BrowserRouter>
);

export default Router
