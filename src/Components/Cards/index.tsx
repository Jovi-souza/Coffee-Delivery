import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeName, Container, Paragraph, Price, Purchase, SubTitle, AddItems, HowManyItems } from "./styles";

interface CardProps {
  CoffeeSrc: string
  Types: Array<string>
  Title: string
  Description: string
}

export function Card({ CoffeeSrc, Description, Title, Types }:CardProps) {

  const category = Types.map( e => {
    return e
  })

  return(
    <Container>
      <img src={ CoffeeSrc } />
      <div>
        <SubTitle hasContent={ category[0] ? 'flex' : 'none'} >{category[0]}</SubTitle>
        <SubTitle hasContent={ category[1] ? 'flex' : 'none'} >{category[1]}</SubTitle>
        <SubTitle hasContent={ category[2] ? 'flex' : 'none'} >{category[2]}</SubTitle>
      </div>
      <CoffeeName>{Title}</CoffeeName>
      <Paragraph>{Description}</Paragraph>
      <Purchase>
        <Price>R$ <span>9,90</span></Price>
        <HowManyItems>
          <Minus cursor='pointer' size={14} color='purple'/>
          <div>
            1
          </div>
          <Plus cursor='pointer' size={14} color='purple'/>
        </HowManyItems>
        <AddItems>
          <ShoppingCart weight="fill" size={18} color='white' />
        </AddItems>
      </Purchase>
    </Container>
  )
}