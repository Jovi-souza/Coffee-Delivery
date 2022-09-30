import { createContext, ReactNode, useState } from 'react'

interface Card {
  id: string
  CoffeeSrc: string
  Title: string
}

interface FormProps {
  cep?: string
  rua: string
  complemento?: string
  numero: string
  bairro: string
  cidade?: string
  uf: string
  payment: string
}

interface CardsContextType {
  requests: Card[]
  items: number
  itemsInCart: number
  datas: FormProps
  MoreItems: () => void
  LessItems: () => void
  createNewRequest: (data: Card) => void
  deleteRequest: (requestToDelete: string) => void
  submitClientDatas: (data: FormProps) => void
}

interface childrenProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardsContextType)

export function CardsContext({ children }: childrenProps) {
  const [requests, setRequests] = useState<Card[]>([])
  const [datas, setDatas] = useState({} as FormProps)
  const [items, setItems] = useState(0)

  function createNewRequest(data: Card) {
    const newRequest = {
      id: data.id,
      CoffeeSrc: data.CoffeeSrc,
      Title: data.Title,
    }
    setRequests((state) => [...state, newRequest])
  }

  function deleteRequest(requestToDelete: string) {
    const requestsWithoutDeleteOne = requests.filter((request) => {
      return request.id !== requestToDelete
    })

    setRequests(requestsWithoutDeleteOne)
  }

  function MoreItems() {
    setItems((item) => item + 1)
  }

  function LessItems() {
    setItems((item) => {
      if (item <= 0) {
        return (item = 0)
      }
      return item - 1
    })
  }

  function submitClientDatas(data: FormProps) {
    setDatas(data)
  }

  const itemsInCart = requests.length
  return (
    <CardContext.Provider
      value={{
        requests,
        createNewRequest,
        deleteRequest,
        items,
        itemsInCart,
        datas,
        MoreItems,
        LessItems,
        submitClientDatas,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
