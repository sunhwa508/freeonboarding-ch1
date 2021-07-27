import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 21px;
  }
`;

export default GlobalStyle;
