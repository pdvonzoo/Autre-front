import * as React from "react";
import styled from "../../Utils/typed-styledCom";
import mainImage from "../../Assets/main.jpg";

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
  return (
    <MainImageWrapper>
      <MainImage src={mainImage} alt="main" />
    </MainImageWrapper>
  );
};

export default Main;
