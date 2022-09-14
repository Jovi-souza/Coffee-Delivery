import { createContext, ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

interface Card {
  id: string
  CoffeeSrc: string
  Title: string
}
const FormDataValidantionSchema = zod.object({
  cep: zod
    .string()
    .max(50, 'o número de caracteres excedeu o limite máximo')
    .optional(),
  rua: zod
    .string()
    .min(1, 'preencha o campo, é obrigatório')
    .max(50, 'o número de caracteres excedeu o limite máximo'),
  complemento: zod
    .string()
    .max(50, 'o número de caracteres excedeu o limite máximo')
    .optional(),
  numero: zod
    .string()
    .min(1, 'preencha o campo, é obrigatório')
    .max(5, 'o número de caracteres excedeu o limite máximo'),
  bairro: zod
    .string()
    .max(50, 'o número de caracteres excedeu o limite máximo'),
  cidade: zod
    .string()
    .max(50, 'número de caracteres excedeu o limite máximo')
    .optional(),
  uf: zod
    .string()
    .min(1, 'preencha o campo, é obrigatório')
    .max(20, 'o número de caracteres excedeu o limite máximo'),
})

type FormDatas = zod.infer<typeof FormDataValidantionSchema>

interface CardsContextType {
  requests: Card[]
  items: number
  itemsInCart: number
  datasInfos: {}
  MoreItems: () => void
  LessItems: () => void
  createNewRequest: (data: Card) => void
  deleteRequest: (requestToDelete: string) => void
  typeOfPayment: (event: Event) => void
  submitClientDatas: (data: FormDatas) => void
}

interface childrenProps {
  children: ReactNode
}

export const CardContext = createContext({} as CardsContextType)

export function CardsContext({ children }: childrenProps) {
  const [requests, setRequests] = useState<Card[]>([])
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

  const { reset } = useForm<FormDatas>({
    resolver: zodResolver(FormDataValidantionSchema),
  })

  let datasInfos = {}

  function submitClientDatas(data: FormDatas) {
    const { bairro, numero, rua, uf } = data

    const address = {
      rua,
      numero,
      bairro,
      uf,
    }

    datasInfos = address
    console.log(datasInfos)
    reset()
  }

  function typeOfPayment(event: Event) {
    event.preventDefault()

    const target = event.target as HTMLButtonElement
    console.log(target.value)
  }

  const itemsInCart = requests.length
  return (
    <CardContext.Provider
      value={{
        requests,
        createNewRequest,
        deleteRequest,
        items,
        datasInfos,
        itemsInCart,
        MoreItems,
        LessItems,
        typeOfPayment,
        submitClientDatas,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
