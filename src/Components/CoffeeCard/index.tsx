import { Button, Container, PriceContainer, Title } from "./styles";
import { HowManyItems } from "../Cards/styles";
import { Minus, Plus, Trash} from "phosphor-react";
import { useContext } from "react";
import { CardContext } from "../../Contexts/CardsContext";

interface teste {
  Titles: string,
  CoffeeSrc: string
}

export function CoffeeCard() {
  
  const {MoreItems, LessItems, items} = useContext(CardContext)

  return(
    <Container>
      <img />
      <PriceContainer>
        <Title>
          <h2></h2>
          <p>R$ 9,90</p>
        </Title>
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
//onClick?: React.MouseEventHandler<SVGSVGElement> | undefined