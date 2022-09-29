import React from "react";
import styled from "styled-components";
import theme from "theme/theme";
import { ReactComponent as Logo } from "components/Header/logo.svg";
import Navbar from "./Navbar";
import { Container } from "components/UI";

const StyledHeader = styled.header`
  background-color: ${theme.colors.positive.x300};
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled(Logo)`
  height: ${({ height }) => height || "40px"};
  & path {
    fill: ${({ color }) => color || "white"};
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo color={theme.colors.neutral.x050} />
        <Navbar />
      </Container>
    </StyledHeader>
  );
}
