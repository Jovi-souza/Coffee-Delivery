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
  MoreItems: () => void
  LessItems: () => void
  createNewRequest: (data: Card) => void
  deleteRequest: (requestToDelete: string) => void
}

interface childrenProps {
  children: ReactNode
}

export const CardContext = createContext( {} as CardsContextType)

export function CardsContext( {children}: childrenProps ) {

  const [requests, setRequests] = useState<Card[]>([])
  const [items, setItems] = useState(0)

  function createNewRequest( data: Card ) {
    const newRequest  = {
      id: data.id,
      CoffeeSrc: data.CoffeeSrc,
      Title: data.Title,
    }
    setRequests( (state) => [...state, newRequest] )
  }

  function deleteRequest( requestToDelete: string ) {
    const requestsWithoutDeleteOne = requests.filter( request => {
      return request.id !== requestToDelete
    })

    setRequests( requestsWithoutDeleteOne )
  }

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

  let itemsInCart = requests.length

  return(
    <CardContext.Provider 
    value={{
      requests,
      createNewRequest,
      deleteRequest,
      itemsInCart,
      items,
      MoreItems,
      LessItems
    }}>
      {children}
    </CardContext.Provider>
  )
}