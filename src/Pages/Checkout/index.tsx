import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeeCard } from '../../Components/CoffeeCard'
import { CardContext } from '../../Contexts/CardsContext'
import { Form } from './Form'
import {
  CartContainer,
  ContainerWrap,
  TotalPrice,
  Orders,
  PaymentButton,
  FormContainer,
} from './styles'

export function Checkout() {
  const { requests } = useContext(CardContext)

  return (
    <FormContainer>
      <ContainerWrap>
        <Form />
      </ContainerWrap>
      <ContainerWrap>
        <h1>Cafés selecionados</h1>
        <CartContainer>
          <Orders>
            {requests.map((props) => {
              return (
                <CoffeeCard
                  key={props.id}
                  id={props.id}
                  CoffeeSrc={props.CoffeeSrc}
                  Title={props.Title}
                />
              )
            })}
          </Orders>
          <TotalPrice>
            <p>
              Total de itens <span>R$ 25</span>
            </p>
            <p>
              Entrega <span>R$ 25</span>
            </p>
            <h2>
              Total <span>R$ 25</span>
            </h2>
            <NavLink to="/success">
              <PaymentButton>Confirmar pedido</PaymentButton>
            </NavLink>
          </TotalPrice>
        </CartContainer>
      </ContainerWrap>
    </FormContainer>
  )
}
