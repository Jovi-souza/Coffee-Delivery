import { Button, Container, PriceContainer, Header } from "./styles";
import { HowManyItems } from "../Cards/styles";
import { Minus, Plus, Trash} from "phosphor-react";
import { useContext } from "react";
import { CardContext } from "../../Contexts/CardsContext";

interface CoffeeCardProps {
  key: string
  CoffeeSrc: string
  Title: string
}

export function CoffeeCard( {CoffeeSrc, Title, key}:CoffeeCardProps ) {

  const { MoreItems, LessItems, items } = useContext(CardContext)

  return(
    <Container key={key}>
      <img src={CoffeeSrc} />
      <PriceContainer>
        <Header>
          <h2>{Title}</h2>
          <p>R$ 9,90</p>
        </Header>
        <div>
          <HowManyItems>
            <Minus cursor='pointer' color="purple" size={14} onClick={LessItems}/>
            <div>
              {items}
            </div>
            <Plus cursor='pointer' color="purple" size={14} onClick={MoreItems}/>
          </HowManyItems>
          <Button><Trash color="purple" size={14}/> Remover</Button>
        </div>
      </PriceContainer>
    </Container>
  )
}
