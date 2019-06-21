import gql from "graphql-tag";

const SEE_PRODUCTS = gql`
  {
    seeProducts {
      productname
    }
  }
`;

export default SEE_PRODUCTS;
