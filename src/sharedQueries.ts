import gql from "graphql-tag";

export const ME = gql`
  {
    me {
      username
    }
  }
`;

export const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;
