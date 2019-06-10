import * as React from "react";
import styled from "../../Utils/typed-styledCom";
import Logo from "../Icons";
import Search from "../Search";

const Header = styled.header``;

export default () => (
  <Header>
    <Logo />
    <Search />
  </Header>
);
