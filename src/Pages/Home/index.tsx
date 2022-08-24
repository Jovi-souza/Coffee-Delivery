import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Card } from '../../Components/Cards'
import CoffeIntro from '../../images/CoffeeIntro.svg'
import {
  IntroContainer, 
  About, 
  Paragraph, 
  Title, 
  SectionItems, 
  IconsContainer
} from './styles'

export function Home() {
  return(
    <div>
      <IntroContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Paragraph style='subTitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Paragraph>
          <About>
            <div>
              <IconsContainer style={'yellowDark'}>
                <ShoppingCart weight='fill' color='white' size={16} />
              </IconsContainer>
              <Paragraph>Compra simples e segura</Paragraph>
            </div>
            <div>
              <IconsContainer style={'gray'}>
                <Package weight='fill' color='white' size={16} />
              </IconsContainer>
              <Paragraph>Embalagem mantém o café intacto</Paragraph>
            </div>
              <div>
              <IconsContainer style={'yellow'}>
                <Timer weight='fill' color='white' size={16} />
              </IconsContainer>
              <Paragraph >Entrega rápida e rastreada</Paragraph>
            </div>
            <div>
              <IconsContainer style={'purple'}>
                <Coffee weight='fill' color='white' size={16} />
              </IconsContainer>
              <Paragraph>O café chega fresquinho até você</Paragraph>
            </div>
          </About>
        </div>
        <img src={CoffeIntro} />
      </IntroContainer>
      <Title style={'cardTitle'}>Nossos Cafés</Title>
      <SectionItems>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionItems>
    </div>
  )
}