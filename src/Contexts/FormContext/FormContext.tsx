import { createContext, ReactNode, useState } from 'react'

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

interface FormContextType {
  datas: FormProps
  submitClientDatas: (data: FormProps) => void
}

interface childrenProps {
  children: ReactNode
}

export const FormContext = createContext({} as FormContextType)

export function FormContextProvider({ children }: childrenProps) {
  const [datas, setDatas] = useState({} as FormProps)

  function submitClientDatas(data: FormProps) {
    setDatas(data)
  }

  return (
    <FormContext.Provider
      value={{
        datas,
        submitClientDatas,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
