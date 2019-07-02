import gql from "graphql-tag";

const CONFIRM_USER = gql`
  mutation cofirmAccount($userid: String, $secret: String) {
    cofirmAccount(userid: $userid, secret: $secret)
  }
`;

export default CONFIRM_USER;
