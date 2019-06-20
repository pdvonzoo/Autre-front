import gql from "graphql-tag";

const REGISTER_USER = gql`
  mutation createAccount(
    $userid: String
    $email: String
    $secret: String
    $address: String
    $phonenumber: String
    $username: String
    $userimage: String
  ) {
    createAccount(
      userid: $userid
      email: $email
      secret: $secret
      address: $address
      phonenumber: $phonenumber
      username: $username
      userimage: $userimage
    )
  }
`;

export default REGISTER_USER;
