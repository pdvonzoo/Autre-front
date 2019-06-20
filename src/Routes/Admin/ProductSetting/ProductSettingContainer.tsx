import * as React from "react";
import useInput from "../../../Hooks/useInput";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import ProductSettingPresenter from "./ProductSettingPresenter";

const REGISTER_PRODUCT = gql`
  mutation createProduct($productname: String, $productimage: String) {
    createProduct(productname: $productname, productimage: $productimage)
  }
`;

const ProductSettingContainer = () => {
  const productname = useInput("");
  const productimage = useInput("");

  const registerProduct = useMutation(REGISTER_PRODUCT, {
    variables: {
      productname: productname.value,
      productimage: productimage.value
    }
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const { data } = await registerProduct();
  };

  return (
    <ProductSettingPresenter
      productname={productname}
      productimage={productimage}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProductSettingContainer;
