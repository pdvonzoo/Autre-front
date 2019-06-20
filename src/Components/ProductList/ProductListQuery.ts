import gql from "graphql-tag";

const SEE_PRODUCTS = gql`
  {
    seeProducts {
      id
      productname
    }
  }
`;

export default SEE_PRODUCTS;
