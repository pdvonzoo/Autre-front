import gql from "graphql-tag";

const ADD_CART = gql`
  mutation addCart($productid: String) {
    addCart(productid: $productid)
  }
`;

export default ADD_CART;
