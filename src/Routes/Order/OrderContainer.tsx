import React from "react";
import OrderPresenter from "./OrderPresenter";
import { GET_USER, GET_PRODUCTS } from "./OrderQueries";
import { useQuery } from "react-apollo-hooks";

const OrderContainer = () => {
  const product = useQuery(GET_PRODUCTS);
  const user = useQuery(GET_USER);
  if (product.loading || user.loading) {
    return <div>Loading...</div>;
  }
  if (product.error || user.error) {
    return (
      <div>
        Error!{" "}
        {(product.error && product.error.message) ||
          (user.error && user.error.message)}
      </div>
    );
  }
  return <OrderPresenter product={product.data.showCart} user={user.data.me} />;
};

export default OrderContainer;
