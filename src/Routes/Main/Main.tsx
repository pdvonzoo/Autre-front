import React from "react";
import styled from "../../Utils/typed-styledCom";
import { useQuery } from "react-apollo-hooks";
import { GET_IMAGES, GET_TEXTS } from "./MainQuery";
import useInput from "../../Hooks/useInput";
import Header from "../../Components/Header";

const MainImageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const MainImage = styled.img`
  margin: auto;
  width: 100%;
`;

const MainText = styled.p`
  font-size: 20rem;
`;

const Main = () => {
  const logo = useInput("");
  const mainImage = useInput("");
  const mainText = useInput("");
  const images = useQuery(GET_IMAGES);
  const texts = useQuery(GET_TEXTS);

  React.useEffect(() => {
    if (images.data) return;
    for (let value of images.data.GetImages) {
      if (value.title === "logo") {
        logo.setValue(value.url);
      }
      if (value.title === "mainImage") {
        mainImage.setValue(value.url);
      }
    }
    mainText.setValue([
      ...texts.data.GET_TEXTS.filter((v: any) => v.title === "mainText")
    ]);
  }, [images.data]);
  return (
    <MainImageWrapper>
      <Header logo={logo.value} />
      <MainImage src={mainImage.value} alt="main" />
      <MainText>mainText.value</MainText>
    </MainImageWrapper>
  );
};

export default Main;
