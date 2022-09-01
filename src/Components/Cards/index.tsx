import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { MouseEventHandler, useContext } from "react";
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

export function Card( { ...props }:CardProps ) {

  const { creteNewRequest, MoreItems, LessItems, items } = useContext(CardContext)

  const category = props.Types.map( name => {
    return name
  })

  const handleCreteNewRequest = creteNewRequest as unknown as MouseEventHandler

  return(
    <Container>
      <img src={ props.CoffeeSrc } />
      <div>
        <SubTitle hasContent={ category[0] ? 'flex' : 'none'} >{category[0]}</SubTitle>
        <SubTitle hasContent={ category[1] ? 'flex' : 'none'} >{category[1]}</SubTitle>
        <SubTitle hasContent={ category[2] ? 'flex' : 'none'} >{category[2]}</SubTitle>
      </div>
      <CoffeeName>{props.Title}</CoffeeName>
      <Paragraph>{props.Description}</Paragraph>
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