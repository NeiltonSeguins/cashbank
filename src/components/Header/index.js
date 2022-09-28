import React from "react";
import styled from "styled-components";
import theme from "theme/theme";
import { ReactComponent as Logo } from "components/Header/logo.svg";
import { ReactComponent as User } from "components/Header/user.svg";

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

const StyledIcone = styled(User)`
  height: ${({ height }) => height || "40px"};
  & path {
    fill: ${({ color }) => color || `${theme.colors.neutral.x050}`};
  }
  & circle {
    fill: ${({ color }) => color || "transparent"};
    stroke: ${({ color }) => color || `${theme.colors.neutral.x050}`};
  }
`;

const Container = styled.div`
  width: 1199px;
  display: flex;
  justify-content: space-between;
`;

const Navbar = styled.nav`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.neutral.x050};
  font-weight: 500;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo color={theme.colors.neutral.x050} />
        <Navbar>
          <Text>Neilton dos Santos Seguins Costa</Text>
          <StyledIcone />
        </Navbar>
      </Container>
    </StyledHeader>
  );
}
