import * as React from "react";
import styled from "../../Utils/typed-styledCom";
// import mainImage from "../../Assets/main.jpg";
import { useQuery } from "react-apollo-hooks";
import GET_IMAGES from "./MainQuery";
import useInput from "../../Hooks/useInput";
import Header from "../../Components/Header";

const MainImageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const MainImage = styled.img`
  margin: auto;
  height: 100%;
`;

const Main = () => {
  const logo = useInput("");
  const mainImage = useInput("");
  const { data, loading } = useQuery(GET_IMAGES);

  React.useEffect(() => {
    if (loading) return;
    console.log(data, loading);
    for (let value of data.GetImages) {
      if (value.title === "logo") {
        logo.setValue(value.url);
      }
      if (value.title === "mainImage") {
        mainImage.setValue(value.url);
      }
    }
  }, [data]);
  console.log(mainImage.value);
  return (
    <MainImageWrapper>
      <Header />
      <MainImage src={mainImage.value} alt="main" />
    </MainImageWrapper>
  );
};

export default Main;
