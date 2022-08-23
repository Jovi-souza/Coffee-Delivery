import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeName, Container, Paragraph, Price, Purchase, SubTitle, AddItems, HowManyItems } from "./styles";

import teste from '../../images/ExpressoCremoso.svg'
export function Card() {
  return(
    <Container>
      <img src={ teste } />
      <SubTitle>Tradicional</SubTitle>
      <SubTitle>Tradicional</SubTitle>
      <CoffeeName>Expresso Tradicional</CoffeeName>
      <Paragraph>O tradicional café feito com água quente e grãos moídos</Paragraph>
      <Purchase>
        <Price>R$ <span>9,90</span></Price>
        <HowManyItems>
          <Minus cursor='pointer' size={14}/>
          <div>
            1
          </div>
          <Plus cursor='pointer' size={14}/>
        </HowManyItems>
        <AddItems> <ShoppingCart weight="fill" size={18} color='white' /></AddItems>
      </Purchase>
    </Container>
  )
}