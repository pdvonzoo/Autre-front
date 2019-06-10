import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { defaults } from "./LocalState";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createHttpLink({ uri: process.env.SERVER_URL }),
  cache
});

export default client;
