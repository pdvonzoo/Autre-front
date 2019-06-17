import * as React from "react";
import styled from "../../Utils/typed-styledCom";
import ShopImage from "../../Assets/shop1.jpg";

const ShopWrapper = styled.div``;
const ShopList = styled.div``;
const ShopItem = styled.div`
  float: left;
  width: 25%;
  text-align: center;
  &:after {
    content: "";
    display: table;
    both: clear;
  }
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.h3``;
const Price = styled.p``;

const Shop = () => (
  <ShopWrapper>
    <ShopList>
      <ShopItem>
        <Image src={ShopImage} />
        <Title>receip</Title>
        <Price>3,000원</Price>
      </ShopItem>
      <ShopItem>
        <Image src={ShopImage} />
        <Title>receip</Title>
        <Price>3,000원</Price>
      </ShopItem>
      <ShopItem>
        <Image src={ShopImage} />
        <Title>receip</Title>
        <Price>3,000원</Price>
      </ShopItem>
      <ShopItem>
        <Image src={ShopImage} />
        <Title>receip</Title>
        <Price>3,000원</Price>
      </ShopItem>
      <ShopItem>
        <Image src={ShopImage} />
        <Title>receip</Title>
        <Price>3,000원</Price>
      </ShopItem>
      <ShopItem>
        <Image src={ShopImage} />
        <Title>receip</Title>
        <Price>3,000원</Price>
      </ShopItem>
      <ShopItem>
        <Image src={ShopImage} />
        <Title>receip</Title>
        <Price>3,000원</Price>
      </ShopItem>
    </ShopList>
  </ShopWrapper>
);

export default Shop;
