import { GlobalStyle } from "./globalStyles";
import { Header, Body } from "./components";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Body />
    </ThemeProvider>
  );
}

export default App;
