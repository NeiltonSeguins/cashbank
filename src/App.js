import Extrato from "components/Extrato";
import Header from "components/Header";
import Menu from "components/Menu";
import Transacao from "components/Transacao";
import { Container } from "components/UI";
import Welcome from "components/Welcome";
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import ThemeProvider from "./theme/ThemeProvider";

const StyledContainer = styled(Container)`
  width: 1199px;
  justify-content: space-between;
`;

const Wrapper = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <StyledContainer>
        <Menu />
        <Wrapper>
          <Welcome />
          <Transacao />
        </Wrapper>
        <Extrato />
      </StyledContainer>
    </ThemeProvider>
  );
}
