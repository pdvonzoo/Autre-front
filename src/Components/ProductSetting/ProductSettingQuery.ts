import gql from "graphql-tag";

const REGISTER_PRODUCT = gql`
  mutation createProduct($productname: String, $productimage: String) {
    createProduct(productname: $productname, productimage: $productimage)
  }
`;

export default REGISTER_PRODUCT;
