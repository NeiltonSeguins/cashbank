import Header from "components/Header";
import Menu from "components/Menu";
import { Container } from "components/UI";
import GlobalStyle from "./theme/GlobalStyle";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Container>
          <Menu />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
