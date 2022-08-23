import { Container } from "./styles";
import { HowManyItems } from "../Cards/styles";
import { Minus, Plus } from "phosphor-react";

import image from '../../images/CaféComLeite.svg'

export function CoffeeCard() {
  return(
    <Container>
      <img src={image} />
      <h1>Expresso Tradicional</h1>
      <p>R$ 9,90</p>
      <HowManyItems >
        <Minus cursor='pointer' size={14}/>
        <div>
          1
        </div>
        <Plus cursor='pointer' size={14}/>
      </HowManyItems>
    </Container>
  )
}