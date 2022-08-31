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

import ExpressoTradicional from '../../images/Expresso.svg'
import ExpressoAmericano from '../../images/Americano.svg'
import ExpressoCremoso from '../../images/ExpressoCremoso.svg'
import ExpressoGelado from '../../images/CaféGelado.svg'

import CafeComLeite from '../../images/CaféComLeite.svg'
import Latte from '../../images/Latte.svg'
import Capuccino from '../../images/Capuccino.svg'
import Macchiato from '../../images/Macchiato.svg'

import Mochaccino from '../../images/Mochaccino.svg'
import ChocolateQuente from '../../images/ChocolateQuente.svg'
import Cubano from '../../images/Cubano.svg'
import Havaiano from '../../images/Havaiano.svg'

import Irlandês from '../../images/Irlandês.svg'
import Árabe from '../../images/Árabe.svg'

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
        <Card
          CoffeeSrc={ExpressoTradicional}
          Types={['Tradicional']}
          Title={'Expresso Tradicional'}
          Description={'O tradicional café feito com água quente e grãos moídos'} 
        />
        <Card
          CoffeeSrc={ExpressoAmericano}
          Types={['Tradicional']}
          Title={'Expresso Americano'}
          Description={'Expresso diluído, menos intenso que o tradicional'} 
        />
        <Card
          CoffeeSrc={ExpressoCremoso}
          Types={['Tradicional']}
          Title={'Expresso Cremoso'}
          Description={'Café expresso tradicional com espuma cremosa'} 
        />
        <Card
          CoffeeSrc={ExpressoGelado}
          Types={['Tradicional', 'Gelado']}
          Title={'Expresso Gelado'}
          Description={'Bebida preparada com café expresso e cubos de gelo'} 
        />
        <Card
          CoffeeSrc={CafeComLeite}
          Types={['Tradicional', 'com leite']}
          Title={'Café com Leite'}
          Description={'Meio a meio de expresso tradicional com leite vaporizado'} 
        />
        <Card
          CoffeeSrc={Latte}
          Types={['Tradicional', 'com leite']}
          Title={'Latte'}
          Description={'Uma dose de café expresso com o dobro de leite e espuma cremosa'} 
        />
        <Card
          CoffeeSrc={Capuccino}
          Types={['Tradicional', 'com leite']}
          Title={'Capuccino'}
          Description={'Bebida com canela feita de doses iguais de café, leite e espuma'} 
        />
        <Card
          CoffeeSrc={Macchiato}
          Types={['Tradicional', 'com leite']}
          Title={'Macchiato '}
          Description={'Café expresso misturado com um pouco de leite quente e espuma'} 
        />
        <Card
          CoffeeSrc={Mochaccino}
          Types={['Tradicional', 'com leite']}
          Title={'Mochaccino '}
          Description={'Café expresso com calda de chocolate, pouco leite e espuma'} 
        />
        <Card
          CoffeeSrc={ChocolateQuente}
          Types={['especial', 'com leite']}
          Title={'Chocolate Quente '}
          Description={'Bebida feita com chocolate dissolvido no leite quente e café'} 
        />
        <Card
          CoffeeSrc={Cubano}
          Types={['Especial', 'alcoólico', 'Gelado']}
          Title={'Cubano '}
          Description={'Drink gelado de café expresso com rum, creme de leite e hortelã'} 
        />
        <Card
          CoffeeSrc={Havaiano}
          Types={['especial']}
          Title={'Havaiano '}
          Description={'Bebida adocicada preparada com café e leite de coco'} 
        />
        <Card
          CoffeeSrc={Árabe}
          Types={['especial']}
          Title={'Árabe '}
          Description={'Bebida preparada com grãos de café árabe e especiarias'} 
        />
        <Card
          CoffeeSrc={Irlandês}
          Types={['especial', 'alcoólico']}
          Title={'Irlandês '}
          Description={'Bebida a base de café, uísque irlandês, açúcar e chantilly'} 
        />
      </SectionItems>
    </div>
  )
}