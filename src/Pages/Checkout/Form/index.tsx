import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { CardContext } from '../../../Contexts/CardsContext'
import {
  Button,
  FormContainer,
  HeaderContainer,
  Inputs,
  PaymentContainer,
  SubmitContainer,
  FormInputsContainer,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'

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
  payment: zod.string(),
})

type FormDatas = zod.infer<typeof FormDataValidantionSchema>
export function Form() {
  const { submitClientDatas } = useContext(CardContext)

  const { register, reset, handleSubmit } = useForm<FormDatas>({
    resolver: zodResolver(FormDataValidantionSchema),
  })

  function handleSubmitClientDatas(data: FormDatas) {
    submitClientDatas(data)
    reset()
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleSubmitClientDatas)}>
      <FormInputsContainer>
        <h1>Complete seu pedido</h1>
        <HeaderContainer>
          <h2>
            <MapPinLine color="orange" /> Endereço de entrega
          </h2>
          <p>informe o endereço onde deseja receber seu pedido</p>
        </HeaderContainer>
        <Inputs
          placeholder="CEP"
          id="CEP"
          type="text"
          width={'small'}
          {...register('cep')}
        />
        <Inputs
          placeholder="Rua"
          id="rua"
          type="text"
          width={'full'}
          required
          {...register('rua')}
        />
        <Inputs
          placeholder="Número"
          type="text"
          width={'small'}
          required
          {...register('numero')}
        />
        <Inputs
          placeholder="Complemento"
          type="text"
          width={'medium'}
          {...register('complemento')}
        />
        <Inputs
          placeholder="Bairro"
          type="text"
          width={'small'}
          required
          {...register('bairro')}
        />
        <Inputs
          placeholder="Cidade"
          type="text"
          width={'small'}
          {...register('cidade')}
        />
        <Inputs
          placeholder="UF"
          type="text"
          width={'small'}
          required
          {...register('uf')}
        />
      </FormInputsContainer>
      <PaymentContainer>
        <HeaderContainer>
          <h2>
            <CurrencyDollarSimple color="purple" size={24} /> Pagamento
          </h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </HeaderContainer>
        <SubmitContainer>
          <Button
            value="Cartão de crédito"
            type="submit"
            {...register('payment')}
          >
            <CreditCard color="purple" size={16} />
            Cartão de crédito
          </Button>
          <Button
            value="Cartão de débito"
            type="submit"
            {...register('payment')}
          >
            <Bank color="purple" size={16} />
            Cartão de débito
          </Button>
          <Button value="Dinheiro" type="submit" {...register('payment')}>
            <Money color="purple" size={16} />
            Dinheiro
          </Button>
        </SubmitContainer>
      </PaymentContainer>
    </FormContainer>
  )
}
