import React from "react";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import ProductSettingPresenter from "./ProductSettingPresenter";
import REGISTER_PRODUCT from "./ProductSettingQuery";

const ProductSettingContainer = () => {
  const productname = useInput("");
  const productimage = useInput("");
  const price = useInput("");
  const color = useInput("");
  const text = useInput("");
  const size = useInput("");
  const registerProduct = useMutation(REGISTER_PRODUCT, {
    variables: {
      productname: productname.value,
      productimage: productimage.value,
      price: price.value,
      color: color.value,
      text: text.value,
      size: size.value
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
      price={price}
      color={color}
      text={text}
      size={size}
      handleSubmit={handleSubmit}
    />
  );
};

export default ProductSettingContainer;
