import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Card } from '../../Components/Cards'
import CoffeIntro from '../../images/CoffeeIntro.svg'
import {
  IntroContainer, 
  About, 
  Paragraph, 
  Title, 
  SectionItems 
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
              <div className='icons' >
                <ShoppingCart className='icons' weight='fill' color='white' size={16} />
              </div>
              <Paragraph>Compra simples e segura</Paragraph>
            </div>
            <div>
              <div className='icons' >
                <Package className='icons' weight='fill' color='white' size={16} />
              </div>
              <Paragraph>Embalagem mantém o café intacto</Paragraph>
            </div>
              <div>
              <div className='icons' >
                <Timer className='icons' weight='fill' color='white' size={16} />
              </div>
              <Paragraph >Entrega rápida e rastreada</Paragraph>
            </div>
            <div>
              <div className='icons' >
                <Coffee className='icons' weight='fill' color='white' size={16} />
              </div>
              <Paragraph>O café chega fresquinho até você</Paragraph>
            </div>
          </About>
        </div>
        <img src={CoffeIntro} />
      </IntroContainer>
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