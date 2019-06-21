import React from "react";
import { useMutation } from "react-apollo-hooks";
import { DELETE_PRODUCT, EDIT_PRODUCT } from "./ItemQuery";

const Item = ({ item }: any) => {
  const removeProduct = useMutation(DELETE_PRODUCT, {
    variables: { productid: item._id }
  });
  const editProduct = useMutation(EDIT_PRODUCT, {
    variables: { productid: item._id }
  });
  return (
    <>
      <div>${item.productname}</div>
      <button type="button" onClick={(e: any) => editProduct(e)}>
        Edit
      </button>
      <button
        type="button"
        onClick={async () => {
          removeProduct();
        }}
      >
        DELETE
      </button>
    </>
  );
};
export default Item;
