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
  createNewRequest: (data: Card) => void
  deleteRequest: (requestToDelete: Card) => void
}

interface childrenProps {
  children: ReactNode
}

export const CardContext = createContext( {} as CardsContextType)

export function CardsContext({children}: childrenProps ) {
  const [requests, setRequests] = useState<Card[]>([])

  function createNewRequest( data: Card ) {

    const newRequest  = {
      id: data.id,
      CoffeeSrc: data.CoffeeSrc,
      Title: data.Title,
    }
    
    setRequests( (state) => [...state, newRequest] )
  }

  function deleteRequest(requestToDelete: Card) {

    const requestsWithoutDeleteOne = requests.filter( request => {
        return request !== requestToDelete
    })

    setRequests(requestsWithoutDeleteOne)
}

  let itemsInCart = requests.length

  return(
    <CardContext.Provider 
    value={{
      requests,
      createNewRequest,
      deleteRequest,
      itemsInCart,
    }}>
      {children}
    </CardContext.Provider>
  )
}