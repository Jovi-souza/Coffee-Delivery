import { 
  createContext, 
  ReactNode, 
  useState 
} from "react"

interface Card {
  id: string
  CoffeeSrc: string
  Title: string
}

interface CardsContextType {
  requests: Card[]
  itemsInCart: number
  items: number
  creteNewRequest: (data: Card) => void
  MoreItems: () => void
  LessItems: () => void
}

interface props {
  children: ReactNode
}

export const CardContext = createContext( {} as CardsContextType)

export function CardsContext({children}: props ) {

  const [requests, setRequests] = useState<Card[]>([])
  
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
  
  function creteNewRequest( data: Card ) {
    
    const id = String( new Date().getTime() )
    
    const newRequest  = {
      id,
      CoffeeSrc: data.CoffeeSrc,
      Title: data.Title,
    }
    
    setRequests( (state) => [...state, newRequest] )
  }
  
  let itemsInCart = requests.length

  return(
    <CardContext.Provider 
    value={{
      requests,
      creteNewRequest,
      itemsInCart,
      MoreItems,
      LessItems,
      items
    }}>
      {children}
    </CardContext.Provider>
  )
}