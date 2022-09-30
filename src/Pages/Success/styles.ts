import { styled } from '../../styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '18rem',

  '& img': {
    width: '45rem',
    mt: '15.4rem',
  },
})

export const TitleContainer = styled('div', {
  m: '5rem 0',

  '& h1': {
    fontSize: '4rem',
    color: '$yellowDark',
  },

  '& p': {
    fontSize: '2rem',
    color: '$baseSubTitle',
  },
})

export const YourRequest = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
  borderRadius: '5px 50px 5px 50px',
  padding: '3rem',
  gap: '4.5rem 0',
  zIndex: '1',
  width: '40rem',
  position: 'relative',
  linearGradient: '-45deg, $purple, $yellow',

  '&::before': {
    content: '',
    position: 'absolute',
    background: '$background',
    inset: '0',
    zIndex: '-1',
    margin: '1px',
    borderRadius: '5px 50px 5px 50px',
  },

  '& div': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
})

export const Paragraph = styled('p', {
  fontSize: '1.5rem',
  color: '$baseText',
  width: '35rem',
  '& strong': {
    display: 'inline-flex',
    gap: '1rem',
  },
})
