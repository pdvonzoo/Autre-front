import gql from "graphql-tag";

const SEE_PRODUCTS = gql`
  {
    seeProducts {
      _id
      productname
    }
  }
`;

export default SEE_PRODUCTS;
