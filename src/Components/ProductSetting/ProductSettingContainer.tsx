import * as React from "react";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import ProductSettingPresenter from "./ProductSettingPresenter";
import REGISTER_PRODUCT from "./ProductSettingQuery";

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
    console.log(data);
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
