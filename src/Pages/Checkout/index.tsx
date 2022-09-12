import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from "phosphor-react";

import { useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { CoffeeCard } from "../../Components/CoffeeCard";
import { CardContext } from "../../Contexts/CardsContext";
import {
  CartContainer,
  HeaderContainer,
  PaymentContainer,
  Button,
  ContainerWrap,
  TotalPrice,
  Orders,
  PaymentButton,
  Inputs,
  FormContainer,
  InputsContainer,
} from "./styles";

export function Checkout() {
  const { requests, itemsInCart, submitClientDatas } = useContext(CardContext);

  const { register, handleSubmit } = useForm();

  const handleSubmitClientDatas =
    submitClientDatas as SubmitHandler<FieldValues>;

  return (
    <FormContainer>
      <ContainerWrap>
        <InputsContainer>
          <h1>Complete seu pedido</h1>
          <HeaderContainer>
            <h2>
              <MapPinLine color="orange" /> Endereço de entrega
            </h2>
            <p>informe o endereço onde deseja receber seu pedido</p>
          </HeaderContainer>
          <Inputs
            placeholder="CEP"
            id="CEP"
            type="text"
            width={"small"}
            {...register("cep")}
          />
          <Inputs
            placeholder="Rua"
            id="rua"
            type="text"
            width={"full"}
            required
            {...register("rua")}
          />
          <Inputs
            placeholder="Número"
            type="text"
            width={"small"}
            required
            {...register("numero")}
          />
          <Inputs
            placeholder="Complemento"
            type="text"
            width={"medium"}
            {...register("complemento")}
          />
          <Inputs
            placeholder="Bairro"
            type="text"
            width={"small"}
            required
            {...register("bairro")}
          />
          <Inputs
            placeholder="Cidade"
            type="text"
            width={"small"}
            {...register("cidade")}
          />
          <Inputs
            placeholder="UF"
            type="text"
            width={"small"}
            required
            {...register("uf")}
          />
        </InputsContainer>
        <PaymentContainer>
          <HeaderContainer>
            <h2>
              <CurrencyDollarSimple color="purple" size={24} /> Pagamento
            </h2>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </HeaderContainer>
          <Button value="Cartão de crédito" name="Cartão de crédito">
            <CreditCard color="purple" size={16} /> Cartão de crédito
          </Button>
          <Button value="Cartão de débito">
            <Bank color="purple" size={16} /> Cartão de débito
          </Button>
          <Button value="Dinheiro">
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
              <PaymentButton
                hasItems={itemsInCart ? "yes" : "no"}
                onClick={handleSubmit(handleSubmitClientDatas)}
              >
                Confirmar pedido
              </PaymentButton>
            </NavLink>
          </TotalPrice>
        </CartContainer>
      </ContainerWrap>
    </FormContainer>
  );
}
