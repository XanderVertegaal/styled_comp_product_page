import { GlobalStyle } from "./globalStyles";
import { Header, Body } from "./components";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { useState } from "react";

const App = () => {

  const [quantity, setQuantity] = useState<number>(0)
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = (value: boolean) => {
    setOpenMenu(!value)
  }

  const updateQuantity = (value: number) => {
    setQuantity(value)
  }

  const resetQuantity = () => {
    setQuantity(0)
    setOpenMenu(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle openMenu={openMenu}/>
      <Header openMenu={openMenu} handleOpenMenu={handleOpenMenu} resetQuantity={resetQuantity} quantity={quantity}/>
      <Body updateQuantity={updateQuantity} />
    </ThemeProvider>
  );
}

export default App;
