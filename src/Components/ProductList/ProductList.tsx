import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import Item from "../Item";

const SEE_PRODUCTS = gql`
  {
    seeProducts {
      id
      productname
    }
  }
`;

const ProductList = () => {
  const { data, error, loading } = useQuery(SEE_PRODUCTS);

  return data.seeProducts.map((item: any) => (
    <Item key={item.id} item={item} />
  ));
};

export default ProductList;
