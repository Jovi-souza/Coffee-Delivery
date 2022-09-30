import { BrowserRouter } from 'react-router-dom'
import { CardsContext } from './Contexts/CardsContext'
import { Router } from './Router'
import { Container } from './styles/App'
import { GlobalCss } from './styles/GlobalStyles'

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <CardsContext>
          <Router />
        </CardsContext>
      </BrowserRouter>
      {GlobalCss()}
    </Container>
  )
}
