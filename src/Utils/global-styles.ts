import reset from "styled-reset";
import { createGlobalStyle } from "./typed-styledCom";

const GlobalStyled = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    margin: 0;
  }
  a{ 
    color:inherit;
    text-decoration:none;
  }
  input,
  button{&:focus,&:active{outline:none}
  }
`;

export default GlobalStyled;
