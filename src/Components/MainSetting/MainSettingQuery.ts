import gql from "graphql-tag";

const REGISTER_MAIN_INFO = gql`
  mutation UploadMainInfo($filename: String, $filetype: String) {
    UploadMainInfo(filename: $filename, filetype: $filetype) {
      signedRequest
      url
    }
  }
`;

export default REGISTER_MAIN_INFO;
