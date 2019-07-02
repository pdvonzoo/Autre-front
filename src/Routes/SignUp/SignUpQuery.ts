import gql from "graphql-tag";

// const Address = gql`
//   export default type Address {
// addressType: String
// zonecode: String
// address: String
// roadAddress: String
// jibunAddress: String
// sido: String
// sigungu: String
// bname: String
// query: String
//   }
// `;
const REGISTER_USER = gql`
  mutation createAccount(
    $userid: String
    $email: String
    $secret: String
    $phonenumber: String
    $username: String
    $userimage: String
  ) {
    createAccount(
      userid: $userid
      email: $email
      secret: $secret
      phonenumber: $phonenumber
      username: $username
      userimage: $userimage
    )
  }
`;

const SEND_SMS = gql`
  mutation sendSMSAuth($phonenumber: String) {
    sendSMSAuth(phonenumber: $phonenumber)
  }
`;

export { REGISTER_USER, SEND_SMS };
