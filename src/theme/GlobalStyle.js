import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    font-family: ${theme.typography.fontFamily};
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: ${theme.colors.positive.x050};
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
