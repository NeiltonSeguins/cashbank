import styled from "styled-components";
import theme from "theme/theme";
import { ReactComponent as User } from "components/Header/user.svg";

const StyledNavbar = styled.nav`
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.positive.x400};
  font-weight: 500;
`;

const StyledIcone = styled(User)`
  height: ${({ height }) => height || "40px"};
  & path {
    fill: ${({ color }) => color || `${theme.colors.positive.x400}`};
  }
  & circle {
    fill: ${({ color }) => color || "transparent"};
    stroke: ${({ color }) => color || `${theme.colors.positive.x400}`};
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Text>Neilton dos Santos Seguins Costa</Text>
      <StyledIcone />
    </StyledNavbar>
  );
}
