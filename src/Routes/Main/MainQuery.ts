import gql from "graphql-tag";

const GET_IMAGES = gql`
  {
    GetImages {
      title
      url
    }
  }
`;

const GET_TEXTS = gql`
  {
    GetTexts {
      title
      text
    }
  }
`;

export { GET_IMAGES, GET_TEXTS };
