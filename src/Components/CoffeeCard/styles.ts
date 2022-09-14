import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
})

export const PriceContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  width: '100%',

  '& div': {
    display: 'flex',
    gap: '1rem',
  },
})

export const Header = styled('div', {
  justifyContent: 'space-between',

  '& h2': {
    fontSize: '1.75rem',
    color: '$baseSubTitle',
  },

  '& p': {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '$baseSubTitle',
  },
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
  padding: '1rem',
  borderRadius: '5px',
  border: 'none',
  color: '$baseText',
  backgroundColor: '$baseButton',
  textTransform: 'uppercase',

  '&:hover': {
    backgroundColor: '$baseHover',
  },

  '&:focus': {
    backgroundColor: '$purpleLight',
    outlineColor: '$purple',
  },
})
