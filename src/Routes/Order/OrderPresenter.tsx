import React from "react";

const OrderPresenter = ({ product, user }: any) => {
  console.log(product);
  return (
    <>
      <div>productname: {product[0].productname}</div>
      <div>userid: {user.userid}</div>
    </>
  );
};

export default OrderPresenter;
