import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import SignInPresenter from "./SignIn";
import SignUpPresenter from "./SignUp";

const AppPath: React.SFC = () => {
  return (
    <BrowserRouter>
      <LoggedInRoutes />
    </BrowserRouter>
  );
};

const LoggedInRoutes: React.SFC = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Main} />
      <Route path="/signin" exact={true} component={SignInPresenter} />
      <Route path="/signup" exact={true} component={SignUpPresenter} />
    </Switch>
  );
};

export default AppPath;
