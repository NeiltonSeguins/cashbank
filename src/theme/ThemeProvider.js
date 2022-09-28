import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";

export default function ThemeProvider({ children }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
