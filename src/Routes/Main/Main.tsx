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
  console.log(texts);
  React.useEffect(() => {
    console.log(images.data);
    if (!images.data.GetImages) return;
    for (let value of images.data.GetImages) {
      if (value.title === "logo") {
        logo.setValue(value.url);
      }
      if (value.title === "mainImage") {
        mainImage.setValue(value.url);
      }
    }
  }, [images.loading]);
  React.useEffect(() => {
    console.log(texts);
    if (!texts.data.GetTexts) return;

    // mainText.setValue([
    //   ...texts.data.GetText.filter((v: any) => v.title === "mainText")
    // ]);
  }, [texts.loading]);
  return (
    <>
      {!texts.loading && !images.loading ? (
        <MainImageWrapper>
          <Header logo={logo.value} />
          <MainImage src={mainImage.value} alt="main" />
          <MainText>{mainText.value}</MainText>
        </MainImageWrapper>
      ) : null}
    </>
  );
};

export default Main;
