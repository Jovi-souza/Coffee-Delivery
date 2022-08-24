import { styled } from "../../styles/stitches.config"

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0'
})

export const LocaleAndCart = styled('div', {
  display: 'flex',
  width: 'max-content',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.25rem',
  
  '& .MapPin': {
    borderRadius: '5px',
    backgroundColor: '$purpleLight',
    color: '$purpleDark',
  },

  '& p': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem',
    marginRight: '2rem',
    padding: '.75rem',
    borderRadius: '5px',
    backgroundColor: '$purpleLight',
    color: '$purpleDark',
  }
})

export const ShoppingCartContainer = styled('div', {
  backgroundColor: '$yellowLight',
  padding: '.65rem 1rem',
  borderRadius: '5px',
  position: 'relative',
  cursor: 'pointer',

  '& p': {
    position: 'absolute',
    top: '0',
    right: '0',
    mr: '-1rem',
    mt: '-1.5rem',
    width: '2rem',
    height: '2rem',

    display: 'flex',
    justifyContent: 'center',
    fontSize: '.75rem',
    color: '$white',
    backgroundColor: '$yellowDark',
    borderRadius: '50px'
  }
})