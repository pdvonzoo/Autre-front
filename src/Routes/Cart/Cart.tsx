import * as React from "react";
import styled from "../../Utils/typed-styledCom";

const CartWrapper = styled.div``;
const ProductWrapper = styled.div``;
const ImageWrapper = styled.div``;
const Image = styled.img``;
const Name = styled.div``;
const NumWrapper = styled.div``;
const Price = styled.div``;
const AllPrice = styled.div``;
const Submit = styled.input``;

const Cart = () => (
  <>
    <CartWrapper>
      <ProductWrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <Name />
        <NumWrapper />
        <Price />
      </ProductWrapper>
    </CartWrapper>
    <AllPrice />
    <Submit />
  </>
);

export default Cart;
