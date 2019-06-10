import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import client from "./Apollo/Client";
import App from "./App";
import "./Assets/main.jpg";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
