import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

import { BrowserRouter} from "react-router-dom"
import { Router } from "./router";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      <GlobalStyle/>
      <> 
      </>
      </BrowserRouter>
    </ThemeProvider>
  )
}