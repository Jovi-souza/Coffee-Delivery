import { Button, Container, PriceContainer, Header } from "./styles";
import { HowManyItems } from "../Cards/styles";
import { Minus, Plus, Trash} from "phosphor-react";
import { MouseEventHandler, useContext } from "react";
import { CardContext } from "../../Contexts/CardsContext";

interface CoffeeCardProps {
  key: string
  CoffeeSrc: string
  Title: string
}

export function CoffeeCard( {CoffeeSrc, Title}:CoffeeCardProps ) {

  const { deleteRequest } = useContext( CardContext )

  const handleDeleteRequest = deleteRequest as unknown as MouseEventHandler

  return(
    <Container >
      <img src={CoffeeSrc} />
      <PriceContainer>
        <Header>
          <h2>{Title}</h2>
          <p>R$ 9,90</p>
        </Header>
        <div>
          <HowManyItems>
            <Minus cursor='pointer' color="purple" size={14} />
            <div>
            </div>
            <Plus cursor='pointer' color="purple" size={14} />
          </HowManyItems>
          <Button><Trash color="purple" size={14} onClick={ handleDeleteRequest }/> Remover</Button>
        </div>
      </PriceContainer>
    </Container>
  )
}
