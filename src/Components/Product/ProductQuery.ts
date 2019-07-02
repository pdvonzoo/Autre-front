import gql from "graphql-tag";

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productid: String) {
    deleteProduct(productid: $productid)
  }
`;

const EDIT_PRODUCT = gql`
  mutation editProduct($productid: String) {
    editProduct(productid: $productid)
  }
`;

export { DELETE_PRODUCT, EDIT_PRODUCT };
