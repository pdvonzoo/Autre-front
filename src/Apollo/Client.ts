import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { defaults, resolvers, typeDefs } from "./LocalState";
import { ApolloLink } from "apollo-link";

const cache = new InMemoryCache();
const stateLink = withClientState({ cache, defaults, resolvers });
const link = ApolloLink.from([
  stateLink,
  new HttpLink({ uri: "http://localhost:5000", credentials: "include" })
]);

const client = new ApolloClient({
  typeDefs,
  link,
  cache
});

export default client;
