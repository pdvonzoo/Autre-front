import React from "react";

const OrderPresenter = ({ product, user }: any) => {
  return (
    <>
      <div>{product.productname}</div>
      <div>{user.userid}</div>
    </>
  );
};

export default OrderPresenter;
