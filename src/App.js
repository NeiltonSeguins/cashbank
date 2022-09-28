import Header from "components/Header";
import GlobalStyle from "./theme/GlobalStyle";
import ThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  );
};

export default App;
