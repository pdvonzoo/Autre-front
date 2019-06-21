import * as React from "react";
import styled from "../../Utils/typed-styledCom";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const CartWrapper = styled.div``;
const ProductWrapper = styled.div``;
const ImageWrapper = styled.div``;
const Image = styled.img``;
const Name = styled.div``;
const NumWrapper = styled.div``;
const Price = styled.div``;
const AllPrice = styled.div``;
const Submit = styled.button``;
const GET_PRODUCTS = gql`
  {
    showCart {
      productname
    }
  }
`;

const Cart = () => {
  const { data, error, loading } = useQuery(GET_PRODUCTS);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }
  console.log(data);
  return (
    <>
      <CartWrapper>
        <ProductWrapper>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <Name>{data.showCart[0].productname}</Name>
          <NumWrapper />
          <Price />
        </ProductWrapper>
      </CartWrapper>
      <AllPrice />
      <Submit />
    </>
  );
};

export default Cart;
