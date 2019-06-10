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
      <Route path="/" exact component={Main} />
      <Route path="/signin" exact component={SignInPresenter} />
      <Route path="/signup" exact component={SignUpPresenter} />
    </Switch>
  );
};

export default AppPath;
