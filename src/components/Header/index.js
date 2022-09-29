import React from "react";
import styled from "styled-components";
import theme from "theme/theme";
import { ReactComponent as Logo } from "components/Header/bytebank.svg";
import { Container } from "components/UI";
import Navbar from "./Navbar";

const StyledHeader = styled.header`
  background-color: ${theme.colors.neutral.x999};
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled(Container)`
  justify-content: space-between;
  width: 1199px;
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
      <StyledContainer>
        <StyledLogo color={theme.colors.positive.x400} />
        <Navbar />
      </StyledContainer>
    </StyledHeader>
  );
}
