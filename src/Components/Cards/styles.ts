import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$baseCard',
  width: '28rem',
  padding: '0 2rem 2rem 2rem',
  textAlign: 'center',
  mb: '3rem',
  borderRadius: '5px 50px 5px 50px',

  '& img': {
    width: '16rem',
    margin: '-3rem 0 0 0'
  }
})

export const SubTitle = styled('span', {
  color: '$yellowDark',
  backgroundColor: '$yellowLight',
  padding: '.1rem 1rem',
  margin: '1.5rem 0',
  width: 'max-content',
  borderRadius: '50px',
  textTransform: 'uppercase'
})

export const CoffeeName = styled('h1', {
  fontSize: '2rem',
  color: '$baseSubTitle',
  fontFamily: 'Baloo 2 , sans-serif'
})

export const Paragraph = styled('p', {
  fontSize: '1.25rem',
  color: '$baseLabel',
  width: '20rem',
  margin: '1rem auto 2rem'
})

export const Purchase = styled('div', {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '24rem',
  margin: 'auto'
})

export const Price = styled('div', {
  color: '$baseText',
  fontSize: '1.5rem',

  '& span': {
    fontFamily: 'Baloo 2, sans-serif',
    fontSize: '2rem',
    fontWeight: '800'
  }
})

export const HowManyItems = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  padding: '1rem 1rem',
  width: 'max-content',
  borderRadius: '5px',

  backgroundColor: '$baseButton',

  '& div': {
    fontSize: '1.25rem'  
  },
})

export const AddItems = styled('button', {
  border: 'none',
  backgroundColor: '$purpleDark',
  padding: '.5rem .75rem',
  borderRadius: '5px',
  transition: '.2s',
  
  '&:hover': {
    backgroundColor: '$purple',
  }
})