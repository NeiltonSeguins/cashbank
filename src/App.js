import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import Extrato from "components/Extrato";
import Header from "components/Header";
import Menu from "components/Menu";
import Transacao from "components/Transacao";
import Welcome from "components/Welcome";
import { Container } from "theme/UI";

const StyledContainer = styled(Container)`
  margin-top: 1rem;
  width: 1199px;
  justify-content: space-between;
`;

const Wrapper = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <>
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
    </>
  );
}
