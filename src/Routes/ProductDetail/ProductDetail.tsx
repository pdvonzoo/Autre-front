import * as React from "react";
import styled from "../../Utils/typed-styledCom";
import ShopImage from "../../Assets/shop1.jpg";
import Review from "../../Components/Review";
import { useMutation } from "react-apollo-hooks";
import ADD_CART from "./ProductDetailQuery";
import { withRouter } from "react-router";

const ProductWrapper = styled.div``;
const Header = styled.div`
  font-size: 0;
`;
const Main = styled.div``;
const ImageWrapper = styled.div`
  float: left;
  width: 50%;
`;
const Image = styled.img`
  width: 100%;
`;
const ProductPay = styled.div`
  float: left;
  width: 50%;
  font-size: 1.2rem;
`;
const Title = styled.div``;
const Price = styled.div``;
const ShippingFee = styled.div``;
const NumOption = styled.div``;
const AddCart = styled.button``;

const ProductDetail = ({
  match: {
    params: { productid }
  },
  location: { state },
  history
}: any) => {
  const addCart = useMutation(ADD_CART, {
    variables: {
      productid
    }
  });
  return (
    <ProductWrapper>
      <Header>
        <ImageWrapper>
          <Image src={ShopImage} />
        </ImageWrapper>
        <ProductPay>
          <Title>{state.productname}</Title>
          <Price>3,000원</Price>
          <ShippingFee>
            <span>배송비</span>
            <span>2,500원(50,000원 이상 구매 시 무료)</span>
          </ShippingFee>
          <NumOption />
          <AddCart
            type="button"
            onClick={(e: any) => {
              history.push("/cart");
              addCart();
            }}
          >
            Cart
          </AddCart>
        </ProductPay>
      </Header>
      <Main>
        <Image src={ShopImage} />
        <Review />
      </Main>
    </ProductWrapper>
  );
};

export default withRouter(ProductDetail);
