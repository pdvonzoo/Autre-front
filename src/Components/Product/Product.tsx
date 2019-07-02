import React from "react";
import { useMutation } from "react-apollo-hooks";
import { DELETE_PRODUCT, EDIT_PRODUCT } from "./ProductQuery";
import { withRouter } from "react-router";

const Item = ({ item, history }: any) => {
  const removeProduct = useMutation(DELETE_PRODUCT, {
    variables: { productid: item._id }
  });
  const editProduct = useMutation(EDIT_PRODUCT, {
    variables: { productid: item._id }
  });
  return (
    <>
      <div onClick={() => history.push(`/product/${item._id}`, item)}>
        {item.productname}
      </div>
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
export default withRouter(Item);
