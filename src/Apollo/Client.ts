import React from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { defaults } from "./LocalState";

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000" }),
  cache
});
