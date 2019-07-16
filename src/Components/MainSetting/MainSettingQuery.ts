import gql from "graphql-tag";

const REGISTER_MAIN_INFO = gql`
  mutation UploadMainInfo($filename: String, $filetype: String) {
    UploadMainInfo(filename: $filename, filetype: $filetype) {
      signedRequest
      url
    }
  }
`;

const SET_IMAGES = gql`
  mutation SetImages($title: String, $url: String) {
    SetImages(title: $title, url: $url)
  }
`;

const SET_TEXTS = gql`
  mutation SetTexts($title: String, $text: String) {
    SetTexts(title: $title, text: $text)
  }
`;

export { REGISTER_MAIN_INFO, SET_IMAGES, SET_TEXTS };
