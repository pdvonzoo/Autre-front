import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import client from "./Apollo/client";
import App from "./App";
import "./Utils/global-styles";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
