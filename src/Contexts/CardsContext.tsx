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
  Requests: Card[]
  deleteRequest: ( requestToDelet: Card ) => void
  createNewRequest: ( event: Card ) => void
  MoreItems: () => void
  LessItems: () => void
  items: number
}

export const CardContext = createContext({} as CardsContextType)

interface props {
  children: ReactNode
}

export function CardsContext({children}: props ) {

  const [Requests, setRequests] = useState<Card[]>([])

  const [NewRequests, setNewRequests] = useState([])

  
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

  function deleteRequest( requestToDelet: Card) {

    const requestWithoutDeleteOne = Requests.filter( request => {
      return request !== requestToDelet
    })

    setRequests(requestWithoutDeleteOne)
  }

  function createNewRequest( event: Card ) {
    const teste: Card = {
      CoffeeSrc: event.CoffeeSrc,
      Title: event.Title
    }

    setRequests([...Requests, teste]) 
    setNewRequests([])
  }

  // tenho que passar a função de deletar e a quatidade de itens do produto
  // tenho que passar a imagem e o nome do produto

  return(
    <CardContext.Provider 
    value={{ 
      Requests,
      deleteRequest,
      createNewRequest,
      LessItems,
      MoreItems,
      items
    }}> 
      {children}
    </CardContext.Provider>
  )
}