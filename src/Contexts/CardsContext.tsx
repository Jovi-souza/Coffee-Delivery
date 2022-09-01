import { 
  createContext, 
  ReactNode, 
  useState 
} from "react"

interface Card {
  CoffeeSrc: String
  Title: string,
}

interface CardsContextType {
  requests: Card[]
  items: number
  newRequests: Card[]
  MoreItems: () => void
  LessItems: () => void
  creteNewRequest: ( data: Card ) => void
}

export const CardContext = createContext({} as CardsContextType)

interface props {
  children: ReactNode
}

export function CardsContext({children}: props ) {

  const [requests, setRequests] = useState<Card[]>([])

  const [newRequests, setnewRequests] = useState([])

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

    const newRequest: Card = {
      CoffeeSrc: data.CoffeeSrc,
      Title: data.Title,
    }

    console.log(data.CoffeeSrc)

    setRequests( (state) => [...state, newRequest])
    setnewRequests([])
  }

  return(
    <CardContext.Provider 
    value={{
      requests,
      creteNewRequest,
      newRequests,
      LessItems,
      MoreItems,
      items
    }}>
      {children}
    </CardContext.Provider>
  )
}