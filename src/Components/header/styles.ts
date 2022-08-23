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
  },

  '& .ShoppingCart': {
    backgroundColor: '$yellowLight',
    color: '$yellow',
    padding: '.65rem 1rem',
    borderRadius: '5px',
  }
})