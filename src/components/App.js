import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import DashBoard from './dashboard/DashBoard';
import ProjectDetail from './projects/ProjectDetail';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProjects';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/project-detail/:id" component={ProjectDetail} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/create-project" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
