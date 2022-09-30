import { BrowserRouter } from 'react-router-dom'
import { CardsContext } from './Contexts/CardsContext'
import { FormContextProvider } from './Contexts/FormContext/FormContext'
import { Router } from './Router'
import { Container } from './styles/App'
import { GlobalCss } from './styles/GlobalStyles'

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <CardsContext>
          <FormContextProvider>
            <Router />
          </FormContextProvider>
        </CardsContext>
      </BrowserRouter>
      {GlobalCss()}
    </Container>
  )
}
