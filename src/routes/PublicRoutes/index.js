//libs
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
//constants
import { CONTACT, HOME, PROJECTS } from "src/shared/constants";

//Views
import { Contact, Home, ProjectsPage, } from "src/views";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={HOME} component={Home} />
        <Route path={PROJECTS} component={ProjectsPage} />
        <Route path={CONTACT} component={Contact} />
        <Route path="*" component={() => <Redirect push to={HOME} />} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
