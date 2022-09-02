import { 
  Bank, 
  CreditCard, 
  CurrencyDollarSimple, 
  MapPinLine, 
  Money 
} from "phosphor-react";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoffeeCard } from "../../Components/CoffeeCard";
import { CardContext } from "../../Contexts/CardsContext";

import { 
  CartContainer, 
  Container, 
  FormContainer, 
  Inputs, 
  HeaderContainer, 
  PaymentContainer, 
  Button,
  ContainerWrap,
  TotalPrice,
  Orders,
} from "./styles";

export function Checkout() {

  const { requests } = useContext( CardContext )
  
  console.log(requests)

  return(
    <Container>
      <ContainerWrap>
        <h1>Complete seu pedido</h1>
        <FormContainer>
          <HeaderContainer>
            <h2><MapPinLine color="orange" /> Endereço de entrega</h2>
            <p>informe o endereço onde deseja receber seu pedido</p>
          </HeaderContainer>
          <Inputs placeholder="CEP" type="text" width={ "small" } />
          <Inputs placeholder="Rua" type="text" width={ "full" }/>
          <Inputs placeholder="Número" type="text" width={ "small" } />
          <Inputs placeholder="Complemento" type="text" width={ "medium" } />
          <Inputs placeholder="Bairro" type="text" width={ "small" }/>
          <Inputs placeholder="Cidade" type="text" width={ "small" }/>
          <Inputs placeholder="UF" type="text" width={ "small" }/>
        </FormContainer>
        <PaymentContainer>
          <HeaderContainer>
            <h2><CurrencyDollarSimple color='purple' size={24} /> Pagamento</h2>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </HeaderContainer>
          <Button><CreditCard color='purple' size={16} /> Cartão de crédito</Button>
          <Button><Bank color='purple' size={16}/> Cartão de débito</Button>
          <Button><Money color='purple' size={16}/>dinheiro</Button>
        </PaymentContainer>
      </ContainerWrap>
      
      <ContainerWrap>
        <h1>Cafés selecionados</h1>
        <CartContainer>
          <Orders>
          { requests.map( (props) => {
              return (
                <CoffeeCard
                  key={props.id}
                  CoffeeSrc={props.CoffeeSrc}
                  Title={props.Title}
                />
              )
          })}
          </Orders>
          <TotalPrice>
            <p>Total de itens <span>R$ 25</span></p>
            <p>Entrega <span>R$ 25</span></p>
            <h2>Total <span>R$ 25</span></h2>
            <NavLink to="/Success" title="Success">
              <button >Confirmar pedido </button>
            </NavLink>
          </TotalPrice>
        </CartContainer>
      </ContainerWrap>
    </Container>
  )
}