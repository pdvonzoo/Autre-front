import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import SignInContainer from "./SignIn";
import SignUpContainer from "./SignUp";
import Shop from "./Shop";
import Product from "./Product";
import User from "./User";
import Cart from "./Cart";
import Order from "./Order";

const AppPath = () => {
  return (
    <BrowserRouter>
      <LoggedInRoutes />
    </BrowserRouter>
  );
};

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/signin" exact component={SignInContainer} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/shop/:product" exact component={Product} />
      <Route path="/cart/:userid" exact component={Cart} />
      <Route path="/order/:userid" exact component={Order} />
      <Route path="/:userid" exact component={User} />
    </Switch>
  );
};

export default AppPath;
