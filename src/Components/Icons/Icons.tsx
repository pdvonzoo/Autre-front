import * as React from "react";
import styled from "../../Utils/typed-styledCom";

const LogoWrapper = styled.div`
  display: inline-block;
  width: 11rem;
  height: 3rem;
`;
const LogoIcon = styled.img`
  width: 100%;
`;

const IconWrapper = styled.div`
  display: inline-block;
  width: 4rem;
  height: 4rem;
`;

const UserIcon = styled.img``;

const Logo = ({ logo }: any) => (
  <LogoWrapper>
    <LogoIcon src={logo} />
  </LogoWrapper>
);

const User = () => (
  <IconWrapper>
    <UserIcon />
  </IconWrapper>
);

export { Logo, User };
