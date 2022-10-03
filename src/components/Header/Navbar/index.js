import styled from "styled-components";
import theme from "theme/theme";
import { ReactComponent as User } from "components/Header/user.svg";
import { StyledParagraph } from "theme/UI";

const StyledNavbar = styled.nav`
  width: 282px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledParagraph>Neilton dos Santos Seguins Costa</StyledParagraph>
      <StyledIcone />
    </StyledNavbar>
  );
}
