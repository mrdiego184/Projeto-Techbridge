import { ThemeProvider } from "styled-components";
import ChoicePage from "./pages/choicepage";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <>
      
      <ChoicePage/>
      
      </>
    </ThemeProvider>
  )
}

