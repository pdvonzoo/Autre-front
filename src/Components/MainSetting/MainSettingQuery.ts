import gql from "graphql-tag";

const REGISTER_MAIN_INFO = gql`
  mutation UploadMainInfo($file: Upload) {
    UploadMainInfo(file: $file)
  }
`;

export default REGISTER_MAIN_INFO;
