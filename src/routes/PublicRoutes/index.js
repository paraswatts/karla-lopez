//libs
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
//constants
import { HOME, PRIVACY_POLICY } from "src/shared/constants";

//Views
import { Home, PrivacyPolicy, } from "src/views";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={HOME} component={Home} />
        <Route path={PRIVACY_POLICY} component={PrivacyPolicy} />
        <Route path="*" component={() => <Redirect push to={HOME} />} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
