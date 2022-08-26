import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5rem'
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
    outline: '1px solid $yellowDark',
  },

  '&::placeholder': {
    display: 'flex',
    alignContent: 'flex-end',
    gap: '10rem'
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
  textTransform: 'uppercase',
  transition: '.2s',

  '&:hover': {
    backgroundColor: '$baseHover'
  },

  '&:focus': {
    backgroundColor: '$purpleLight',
    outlineColor: '$purple',
  }
})

export const CartContainer = styled('div', {
  backgroundColor: '$baseCard',
  width: '35vw',
  padding: '3rem',
  borderRadius: '5px 50px 5px 50px'
})

export const Orders = styled('div', {
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem 0',
  mb: '1rem',
  height: '22rem',

  '&::-webkit-scrollbar': {
    width: '6px',
  },
  
  '&::-webkit-scrollbar-track': {
    background: '$baseHover'    
  },
  
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$yellow',    
    borderRadius: '20px',     
    border: '1px solid #000'  
  }
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
    color: '$baseText'
  },

  '& h2': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '2rem',
    color: '$basetitle'
  },

  '& button': {
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
    
    '&:hover': {
      backgroundColor: '$yellowDark',
    }
  }
})
