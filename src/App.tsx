import { GlobalStyle } from "./globalStyles";
import { Header, Body } from "./components";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { useState } from "react";

const App = () => {

  const [quantity, setQuantity] = useState<number>(0)

  const updateQuantity = (value: number) => {
    setQuantity(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header updateQuantity={updateQuantity} quantity={quantity}/>
      <Body updateQuantity={updateQuantity} />
    </ThemeProvider>
  );
}

export default App;
