import * as React from "react";
import styled from "../../Utils/typed-styledCom";

const LogoWrapper = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
`;
const LogoIcon = styled.img``;

const Logo = () => (
  <LogoWrapper>
    <LogoIcon />
  </LogoWrapper>
);

export default Logo;
