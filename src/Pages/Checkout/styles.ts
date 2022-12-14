import { styled } from '../../styles/stitches.config'

export const FormContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5rem',
})

export const ContainerWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& h1': {
    mb: '1rem',
  },
})

export const HeaderContainer = styled('div', {
  width: '100%',

  '& h2': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    color: '$baseSubTitle',
  },

  '& p': {
    color: '$baseText',
    fontSize: '1.5rem',
    margin: '1rem 0 0 2.25rem',
  },
})

export const CartContainer = styled('div', {
  backgroundColor: '$baseCard',
  width: '35vw',
  padding: '3rem',
  borderRadius: '5px 50px 5px 50px',
})

export const Orders = styled('div', {
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem 0',
  mb: '1rem',
  maxHeight: '22rem',

  '&::-webkit-scrollbar': {
    width: '6px',
  },

  '&::-webkit-scrollbar-track': {
    background: '$baseHover',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$yellow',
    borderRadius: '20px',
    border: '1px solid #000',
  },
})

export const TotalPrice = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  borderTop: '1px solid $baseButton',
  paddingTop: '2rem',
  width: '100%',
  gap: '1.5rem 0',

  '& p': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.5rem',
    color: '$baseText',
  },

  '& h2': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '2rem',
    color: '$basetitle',
  },
})

export const PaymentButton = styled('button', {
  border: 'none',
  borderRadius: '5px',
  color: '$white',
  backgroundColor: '$yellow',
  padding: '1rem',
  width: '100%',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: '.2s',

  variants: {
    hasItems: {
      yes: {
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '$yellowDark',
        },
      },
      no: {
        display: 'none',
      },
    },
  },
})
