import { 
  createContext, 
  ReactNode, 
  useState 
} from "react"

interface Card {
  Title: string,
  CoffeeSrc: String
}

interface CardsContextType {
  items: number
  MoreItems: () => void
  LessItems: () => void
}

export const CardContext = createContext({} as CardsContextType)

interface props {
  children: ReactNode
}

export function CardsContext({children}: props ) {

  const [items, setItems] = useState(0)

  function MoreItems() {
    setItems( item => item + 1 ) 
  }

  function LessItems() {
    setItems( item => {
      if( item <= 0 ) {
        return item = 0
      }
      return item - 1
    })
  }
  
  // tenho que passar a função de deletar e a quatidade de itens do produto
  // tenho que passar a imagem e o nome do produto

  return(
    <CardContext.Provider 
    value={{
      LessItems,
      MoreItems,
      items
    }}>
      {children}
    </CardContext.Provider>
  )
}