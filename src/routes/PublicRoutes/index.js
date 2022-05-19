//libs
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
//constants
import { HOME, CONTACT, OUR_GEAR, ABOUT_US, FAQS, THANK_YOU, CART, PRIVACY_POLICY, TERMS, CCPA_PAGE, EULA as EULA_PAGE } from "src/shared/constants";

//Views
import { Home, ContactUs, OurGear, AboutUs, FAQs, ThankYou, Cart, PrivacyPolicy, Terms, CCPA, EULA } from "src/views";

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={HOME} component={Home} />
        <Route path={CONTACT} component={ContactUs} />
        <Route path={OUR_GEAR} component={OurGear} />
        <Route path={ABOUT_US} component={AboutUs} />
        <Route path={FAQS} component={FAQs} />
        <Route path={THANK_YOU} component={ThankYou} />
        <Route path={CART} component={Cart} />
        <Route path={PRIVACY_POLICY} component={PrivacyPolicy} />
        <Route path={TERMS} component={Terms} />
        <Route path={CCPA_PAGE} component={CCPA} />
        <Route path={EULA_PAGE} component={EULA} />
        <Route path="*" component={() => <Redirect push to={HOME} />} />
      </Switch>
    </Router>
  );
};

export default PublicRoutes;
