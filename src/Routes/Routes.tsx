import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import SignInPresenter from "./SignIn";
import SignUpPresenter from "./SignUp";
import Shop from "./Shop";
import Product from "./Product";
import User from "./User";

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
      <Route path="/shop" exact component={Shop} />
      <Route path="/shop/:product" exact component={Product} />
      <Route path="/:userid" exact component={User} />
    </Switch>
  );
};

export default AppPath;
