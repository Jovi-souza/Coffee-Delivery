import { styled } from '../../../styles/stitches.config'

export const FormContainer = styled('form', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '50vw',
})

export const FormInputsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '50vw',
  padding: '3rem',
  gap: '1.75rem 1rem',
  backgroundColor: '$baseCard',
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
    gap: '10rem',
  },

  variants: {
    width: {
      small: {
        width: '32.2%',
      },
      medium: {
        width: '66%',
      },
      full: {
        width: '100%',
      },
    },
  },
})

export const PaymentContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'space-between',
  width: '50vw',
  margin: '1rem auto 0',
  padding: '2rem 3rem',
  backgroundColor: '$baseCard',
})

export const SubmitContainer = styled('div', {
  display: 'flex',
  gap: '1.5rem',
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

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  border: '1px solid transparent',
  borderRadius: '5px',
  backgroundColor: '$baseButton',
  padding: '1.5rem 3rem',
  color: '$baseText',
  textTransform: 'uppercase',
  transition: '.2s',

  '&:hover': {
    backgroundColor: '$baseHover',
  },

  '&:focus': {
    backgroundColor: '$purpleLight',
    outline: '1px solid $purpleDark',
  },
})
