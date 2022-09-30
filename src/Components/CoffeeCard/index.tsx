import { Button, Container, PriceContainer, Header } from './styles'
import { HowManyItems } from '../Cards/styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CardContext } from '../../Contexts/CardsContext'

interface CoffeeCardProps {
  key: string
  id: string
  CoffeeSrc: string
  Title: string
}

export function CoffeeCard({ CoffeeSrc, Title, id }: CoffeeCardProps) {
  const { deleteRequest } = useContext(CardContext)

  function handleDeleteRequest() {
    deleteRequest(id)
  }

  return (
    <Container>
      <img src={CoffeeSrc} alt="" />
      <PriceContainer>
        <Header>
          <h2>{Title}</h2>
          <p>R$ 9,90</p>
        </Header>
        <div>
          <HowManyItems>
            <Minus
              cursor="pointer"
              color="purple"
              size={14}
              onClick={LessItems}
            />
            <div>{items}</div>
            <Plus
              cursor="pointer"
              color="purple"
              size={14}
              onClick={MoreItems}
            />
          </HowManyItems>
          <Button onClick={handleDeleteRequest}>
            <Trash color="purple" size={14} /> Remover
          </Button>
        </div>
      </PriceContainer>
    </Container>
  )
}
