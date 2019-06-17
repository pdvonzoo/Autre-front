import * as React from "react";
import styled from "../../Utils/typed-styledCom";
import { Logo, User } from "../Icons";
import Search from "../Search";

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default () => (
  <Header>
    <Logo />
    <Search />
    <User />
  </Header>
);
