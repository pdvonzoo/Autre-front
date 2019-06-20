import React from "react";
import { useQuery } from "react-apollo-hooks";
import Item from "../Item";
import SEE_PRODUCTS from "./ProductListQuery";

const ProductList = () => {
  const { data, error, loading } = useQuery(SEE_PRODUCTS);

  if (error) {
    return <>${error}</>;
  }
  if (loading) {
    return <>loading...</>;
  }
  return data.seeProducts.map((item: any) => (
    <>
      <Item key={item.id} item={item} />
    </>
  ));
};

export default ProductList;
