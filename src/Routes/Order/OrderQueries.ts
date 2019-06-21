import gql from "graphql-tag";

const GET_PRODUCTS = gql`
  {
    showCart {
      productname
    }
  }
`;

const GET_USER = gql`
  {
    me {
      userid
    }
  }
`;

export { GET_PRODUCTS, GET_USER };
