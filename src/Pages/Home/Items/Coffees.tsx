import ExpressoTradicionalSvg from '../../../images/Expresso.svg'
import ExpressoAmericanoSvg from '../../../images/Americano.svg'
import ExpressoCremosoSvg from '../../../images/ExpressoCremoso.svg'
import ExpressoGeladoSvg from '../../../images/CaféGelado.svg'
import CafeComLeiteSvg from '../../../images/CaféComLeite.svg'
import LatteSvg from '../../../images/Latte.svg'
import CapuccinoSvg from '../../../images/Capuccino.svg'
import MacchiatoSvg from '../../../images/Macchiato.svg'
import MochaccinoSvg from '../../../images/Mochaccino.svg'
import ChocolateQuenteSvg from '../../../images/ChocolateQuente.svg'
import CubanoSvg from '../../../images/Cubano.svg'
import HavaianoSvg from '../../../images/Havaiano.svg'
import IrlandêsSvg from '../../../images/Irlandês.svg'
import ÁrabeSvg from '../../../images/Árabe.svg'

export const Cofees = {
  ExpressoTradicional: {
    CoffeeSrc: ExpressoTradicionalSvg ,
    Types:['Tradicional'],
    Title:'Expresso Tradicional',
    Description:'O tradicional café feito com água quente e grãos moídos',
  },
  ExpressoAmericano: {
    CoffeeSrc: ExpressoAmericanoSvg,
    Types: ['Tradicional'],
    Title: 'Expresso Americano',
    Description: 'Expresso diluído, menos intenso que o tradicional',
  },
  ExpressoCremoso: {
    CoffeeSrc: ExpressoCremosoSvg,
    Types: ['Tradicional'],
    Title: 'Expresso Cremoso',
    Description: 'Café expresso tradicional com espuma cremosa',
  },
  ExpressoGelado: {
    CoffeeSrc:ExpressoGeladoSvg,
    Types:['Tradicional', 'Gelado'],
    Title:'Expresso Gelado',
    Description:'Bebida preparada com café expresso e cubos de gelo',
  },
  CafeComLeite: {
    CoffeeSrc: CafeComLeiteSvg,
    Types: ['Tradicional', 'com leite'],
    Title: 'Café com Leite',
    Description: 'Meio a meio de expresso tradicional com leite vaporizado',
  },
  Latte: {
    CoffeeSrc: LatteSvg,
    Types: ['Tradicional', 'com leite'],
    Title: 'Latte',
    Description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  },
  Capuccino: {
    CoffeeSrc: CapuccinoSvg,
    Types: ['Tradicional', 'com leite'],
    Title: 'Capuccino',
    Description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
  },
  Macchiato: {
    CoffeeSrc: MacchiatoSvg,
    Types: ['Tradicional', 'com leite'],
    Title: 'Macchiato ',
    Description: 'Café expresso misturado com um pouco de leite quente e espuma',
  },
  Mochaccino: {
    CoffeeSrc: MochaccinoSvg,
    Types: ['Tradicional', 'com leite'],
    Title: 'Mochaccino ',
    Description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  },
  ChocolateQuente: {
    CoffeeSrc: ChocolateQuenteSvg,
    Types: ['especial', 'com leite'],
    Title: 'Chocolate Quente ',
    Description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  },
  Cubano: {
    CoffeeSrc: CubanoSvg,
    Types: ['Especial', 'alcoólico', 'Gelado'],
    Title: 'Cubano ',
    Description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
  },
  Havaiano: {
    CoffeeSrc: HavaianoSvg,
    Types: ['especial'],
    Title: 'Havaiano ',
    Description: 'Bebida adocicada preparada com café e leite de coco',
  },
  Árabe: {
    CoffeeSrc: ÁrabeSvg,
    Types: ['especial'],
    Title: 'Árabe ',
    Description: 'Bebida preparada com grãos de café árabe e especiarias',
  },
  Irlandês: {
    CoffeeSrc: IrlandêsSvg,
    Types: ['especial', 'alcoólico'],
    Title: 'Irlandês ',
    Description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  },
}
