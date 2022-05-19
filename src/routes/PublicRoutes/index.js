//libs
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
//constants
import { HOME, PROJECTS } from "src/shared/constants";

//Views
import { Home, ProjectsPage, } from "src/views";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={HOME} component={Home} />
        <Route path={PROJECTS} component={ProjectsPage} />
        <Route path="*" component={() => <Redirect push to={HOME} />} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
