import { createContext, ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

interface Card {
  id: string;
  CoffeeSrc: string;
  Title: string;
}

interface CardsContextType {
  requests: Card[];
  itemsInCart: number;
  items: number;
  MoreItems: () => void;
  LessItems: () => void;
  createNewRequest: (data: Card) => void;
  deleteRequest: (requestToDelete: string) => void;
  typeOfPayment: (event: Event) => void;
  submitClientDatas: (data: FormData) => void;
}

interface childrenProps {
  children: ReactNode;
}

const FormDataValidantionSchema = zod.object({
  cep: zod
    .string()
    .max(50, "o número de caracteres excedeu o limite máximo")
    .optional(),
  rua: zod
    .string()
    .min(1, "preencha o campo, é obrigatório")
    .max(50, "o número de caracteres excedeu o limite máximo"),
  complemento: zod
    .string()
    .max(50, "o número de caracteres excedeu o limite máximo")
    .optional(),
  numero: zod
    .string()
    .min(1, "preencha o campo, é obrigatório")
    .max(5, "o número de caracteres excedeu o limite máximo"),
  bairro: zod
    .string()
    .max(50, "o número de caracteres excedeu o limite máximo"),
  cidade: zod
    .string()
    .max(50, "número de caracteres excedeu o limite máximo")
    .optional(),
  uf: zod
    .string()
    .min(1, "preencha o campo, é obrigatório")
    .max(20, "o número de caracteres excedeu o limite máximo"),
});

export type FormData = zod.infer<typeof FormDataValidantionSchema>;

export const CardContext = createContext({} as CardsContextType);

export function CardsContext({ children }: childrenProps) {
  const [requests, setRequests] = useState<Card[]>([]);
  const [items, setItems] = useState(0);
  const [about, setAbout] = useState<FormData[]>([]);

  function createNewRequest(data: Card) {
    const newRequest = {
      id: data.id,
      CoffeeSrc: data.CoffeeSrc,
      Title: data.Title,
    };
    setRequests((state) => [...state, newRequest]);
  }

  function deleteRequest(requestToDelete: string) {
    const requestsWithoutDeleteOne = requests.filter((request) => {
      return request.id !== requestToDelete;
    });

    setRequests(requestsWithoutDeleteOne);
  }

  function MoreItems() {
    setItems((item) => item + 1);
  }

  function LessItems() {
    setItems((item) => {
      if (item <= 0) {
        return (item = 0);
      }
      return item - 1;
    });
  }

  const { reset } = useForm<FormData>({
    resolver: zodResolver(FormDataValidantionSchema),
    defaultValues: {
      cep: "",
      rua: "",
      complemento: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  function submitClientDatas(data: FormData) {
    const teste = {
      rua: data.rua,
      bairro: data.bairro,
      numero: data.numero,
      uf: data.uf,
    };

    setAbout((state) => [...state, teste]);
    console.log(about);
    reset()
  }

  let itemsInCart = requests.length;

  function typeOfPayment(event: Event) {
    event.preventDefault()
    
    const target = event.target as HTMLButtonElement;
    console.log(target.value);
  }

  return (
    <CardContext.Provider
      value={{
        requests,
        createNewRequest,
        deleteRequest,
        itemsInCart,
        items,
        MoreItems,
        LessItems,
        typeOfPayment,
        submitClientDatas,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
