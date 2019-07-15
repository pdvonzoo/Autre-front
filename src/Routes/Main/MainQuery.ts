import gql from "graphql-tag";

const GET_IMAGES = gql`
  {
    GetImages {
      title
      url
    }
  }
`;

export default GET_IMAGES;
