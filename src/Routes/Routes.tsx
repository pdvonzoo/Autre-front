import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import SignInContainer from "./SignIn";
import SignUpContainer from "./SignUp";
import Shop from "./Shop";
import ProductDetail from "./ProductDetail";
import User from "./User";
import Cart from "./Cart";
import Order from "./Order";
import ProductSettingContainer from "../Components/ProductSetting";
import Admin from "./Admin";

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
      <Route path="/admin" exact component={Admin} />
      <Route path="/signin" exact component={SignInContainer} />
      <Route path="/signup" exact component={SignUpContainer} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/product/:productid" exact component={ProductDetail} />
      <Route
        path="/product/:product/setting"
        exact
        component={ProductSettingContainer}
      />
      <Route path="/cart" exact component={Cart} />
      <Route path="/order" exact component={Order} />
      <Route path="/:userid" exact component={User} />
    </Switch>
  );
};

export default AppPath;
