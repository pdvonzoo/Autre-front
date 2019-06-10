import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Main";
import LoginPresenter from "./Login";

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
      <Route path="/login" exact={true} component={LoginPresenter} />
    </Switch>
  );
};

export default AppPath;
