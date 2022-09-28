import Header from "components/Header";
import Menu from "components/Menu";
import GlobalStyle from "./theme/GlobalStyle";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Menu />
      </ThemeProvider>
    </>
  );
};

export default App;
