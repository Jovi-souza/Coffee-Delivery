import { Button, Container, PriceContainer, Title } from "./styles";
import { HowManyItems } from "../Cards/styles";
import { Minus, Plus, Trash } from "phosphor-react";

import image from '../../images/CaféComLeite.svg'

export function CoffeeCard() {
  return(
    <Container>
      <img src={image} />
      <PriceContainer>
        <Title>
          <h2>Expresso Tradicional</h2>
          <p>R$ 9,90</p>
        </Title>
        <div>
          <HowManyItems >
            <Minus cursor='pointer' color="purple" size={14}/>
            <div>
              1
            </div>
            <Plus cursor='pointer' color="purple" size={14}/>
          </HowManyItems>
          <Button><Trash color="purple" size={14} /> Remover</Button>
        </div>
      </PriceContainer>
    </Container>
  )
}