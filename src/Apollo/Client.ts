import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:5000" }),
  cache
});

export default client;
