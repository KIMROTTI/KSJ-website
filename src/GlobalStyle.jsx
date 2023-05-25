import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: "Pretendard", "Arial", sans-serif;
    line-height: 1.5;
    background-color: #1B1A1A;
    color: white;
  }
`;

export default GlobalStyle;
