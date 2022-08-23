import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  gap: '2rem'
})

export const ContainerWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& h1': {
    mb: '1rem'
  }
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexWrap:'wrap',
  width: '50vw',
  padding: '3rem',
  gap: '1.75rem 1rem',
  backgroundColor: '$baseCard',
  
  '& div': {
    width: '100%'
  }
})

export const HeaderContainer = styled('div', {
  '& h2': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    color: '$baseSubTitle'
  },
  
  '& p': {
    color: '$baseText',
    fontSize: '1.5rem',
    margin: '1rem 0 0 2.25rem'
  }
})

export const Inputs = styled('input', {
  border: '1px solid $baseButton',
  backgroundColor: '$baseInput',
  color: '$baseLabel',
  padding: '1.25rem',
  borderRadius: '5px',

  '&:focus': {
    outlineColor: '$yellowDark',
  },

  variants: {
    width: {
      small: {
        width: '32.2%'
      },
      medium: {
        width: '66%'
      },
      full: {
        width: '100%'
      },
    },
  },
})

export const PaymentContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '1rem auto 0',
  justifyContent: 'space-between',
  width: '50vw',
  padding: '2rem 3rem',
  backgroundColor: '$baseCard',

  '& div': {
    width: '100%',
    mb: '1.25rem',
  }
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '$baseButton',
  padding: '1.5rem 3rem',
  color: '$baseText',
  textTransform: 'uppercase'
})

export const CartContainer = styled('div', {

})
