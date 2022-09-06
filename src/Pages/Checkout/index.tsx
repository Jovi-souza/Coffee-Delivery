import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from "phosphor-react";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CoffeeCard } from "../../Components/CoffeeCard";
import { CardContext } from "../../Contexts/CardsContext";

import {
  CartContainer,
  Container,
  Inputs,
  HeaderContainer,
  PaymentContainer,
  Button,
  ContainerWrap,
  TotalPrice,
  Orders,
  PaymentButton,
} from "./styles";

export function Checkout() {
  const { requests, itemsInCart, typeOfPayment, submitClientsData } =
    useContext(CardContext);

  const { register, handleSubmit } = useForm();

  function handleSubmitClientsData( data: any ) {
    console.log(data)
  }

  return (
    <Container>
      <ContainerWrap>
        <h1>Complete seu pedido</h1>
          <HeaderContainer>
            <h2>
              <MapPinLine color="orange" /> Endereço de entrega
            </h2>
            <p>informe o endereço onde deseja receber seu pedido</p>
          </HeaderContainer>
        <form onSubmit={handleSubmit(handleSubmitClientsData)} action=''>
          <Inputs
            placeholder="CEP"
            id="CEP"
            type="text"
            width={"small"}
            {...register("CEP", { required: true })}
          />
          <Inputs
            placeholder="Rua"
            id="Rua"
            type="text"
            width={"full"}
            {...register("Rua", { required: true })}
          />
          <Inputs
            placeholder="Número"
            id="Número"
            type="text"
            width={"small"}
            {...register("Número", { required: true })}
          />
          <Inputs placeholder="Complemento" id="Complemento" type="text" width={"medium"} />
          <Inputs placeholder="Bairro" id="Bairro" type="text" width={"small"} />
          <Inputs
            placeholder="Cidade"
            id="Cidade"
            type="text"
            width={"small"}
            {...register("Cidade", { required: true })}
          />
          <Inputs
            placeholder="UF"
            id="UF"
            type="text"
            width={"small"}
            {...register("UF", { required: true })}
          />
        </form>
        <PaymentContainer>
          <HeaderContainer>
            <h2>
              <CurrencyDollarSimple color="purple" size={24} /> Pagamento
            </h2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </HeaderContainer>
          <Button value="Cartão de crédito" onClick={typeOfPayment}>
            <CreditCard color="purple" size={16} /> Cartão de crédito
          </Button>
          <Button value="Cartão de débito" onClick={typeOfPayment}>
            <Bank color="purple" size={16} /> Cartão de débito
          </Button>
          <Button value="Dinheiro" onClick={typeOfPayment}>
            <Money color="purple" size={16} />
            Dinheiro
          </Button>
        </PaymentContainer>
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
              );
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
            <NavLink to="/Success" title="Success">
              <PaymentButton hasItems={itemsInCart ? "yes" : "no"}>
                Confirmar pedido
              </PaymentButton>
            </NavLink>
          </TotalPrice>
        </CartContainer>
      </ContainerWrap>
    </Container>
  );
}
