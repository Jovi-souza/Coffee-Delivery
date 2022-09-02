import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { MouseEventHandler, useContext, useState } from "react";
import { CardContext } from "../../Contexts/CardsContext";
import { 
  CoffeeName, 
  Container, 
  Paragraph, 
  Price, 
  Purchase, 
  SubTitle, 
  AddItems, 
  HowManyItems 
} from "./styles";

interface CardProps {
  CoffeeSrc: string
  Types: Array<string>
  Title: string
  Description: string
}


export function Card( { CoffeeSrc, Description, Title, Types }:CardProps ) {

  const { creteNewRequest, LessItems, MoreItems, items } = useContext(CardContext)

  const category = Types.map( name => {
    return name
  })

  const handleCreteNewRequest = creteNewRequest as unknown as MouseEventHandler

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
          <Minus onClick={LessItems} cursor='pointer' size={16} color='purple'/>
          <div>
            {items}
          </div>
          <Plus onClick={MoreItems} cursor='pointer' size={16} color='purple'/>
        </HowManyItems>
        <AddItems>
          <ShoppingCart weight="fill" size={18} color='white' onClick={ handleCreteNewRequest }/>
        </AddItems>
      </Purchase>
    </Container>
  )
}