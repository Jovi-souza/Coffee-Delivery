import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Container } from "./styles/App";
import { GlobalCss } from "./styles/GlobalStyles";

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {GlobalCss()}
    </Container>
  )
}

