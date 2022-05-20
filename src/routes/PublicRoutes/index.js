//libs
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
//constants
import { CONTACT, HOME, LOOPED_ANIMATIONS, PROJECTS } from "src/shared/constants";
import ScrollToTop from "src/shared/ScrollToTop";

//Views
import { AnimationProject, Contact, Home, ProjectsPage, } from "src/views";

const PublicRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={HOME} component={Home} />
        <Route path={PROJECTS} component={ProjectsPage} />
        <Route path={CONTACT} component={Contact} />
        <Route path={LOOPED_ANIMATIONS} component={AnimationProject} />
        <Route path="*" component={() => <Redirect push to={HOME} />} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
