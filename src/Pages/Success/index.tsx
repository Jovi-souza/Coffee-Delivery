import Illustration from '../../images/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { Container, Paragraph, TitleContainer, YourRequest } from './styles'
import { IconsContainer } from '../Home/styles'
import { useContext } from 'react'
import { CardContext } from '../../Contexts/CardsContext'

export function Success() {
  const { datas } = useContext(CardContext)
  return (
    <Container>
      <div>
        <TitleContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleContainer>
        <YourRequest>
          <div>
            <IconsContainer style={'purple'}>
              <MapPin size={16} color="white" weight="fill" />
            </IconsContainer>
            <Paragraph>
              Entrega em <strong>{datas.rua}</strong>,
              <strong>{datas.numero}</strong> - <span>{datas.bairro}</span>,
              <span>{datas.cidade}</span> <span>{datas.uf}</span>
            </Paragraph>
          </div>

          <div>
            <IconsContainer style={'yellow'}>
              <Timer size={16} color="white" weight="fill" />
            </IconsContainer>
            <Paragraph>
              Previsão de entrega <strong>20 min</strong> -
              <strong>30 min</strong>
            </Paragraph>
          </div>

          <div>
            <IconsContainer style={'yellowDark'}>
              <CurrencyDollar size={16} color="white" />
            </IconsContainer>
            <Paragraph>
              Pagamento na entrega <strong>{datas.payment}</strong>
            </Paragraph>
          </div>
        </YourRequest>
      </div>
      <img src={Illustration} alt="" />
    </Container>
  )
}
