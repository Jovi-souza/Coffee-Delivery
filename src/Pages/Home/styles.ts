import { styled } from "../../styles/stitches.config";

export const IntroContainer = styled('section', {
  display: 'flex',
  gap: '6rem',
  mt: '6rem'
})

export const Title = styled('h1', {
  color: '$basetitle',
  fontSize: '4rem',
  fontWeight: '800',
  width: '60rem',
  mb: '1rem'
})

export const Paragraph = styled('p', {
  display: 'flex',
  fontSize: '1.5rem',
  color: '$baseSubTitle',
  alignItems: 'center',
  ml: '1rem',
  
  variants: {
    style: {
      subTitle: {
        ml: '0',
        color: '$baseText',
        fontSize: '2rem',
        width: '60rem',
      },
    },
  },
})

export const About = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '55rem',
  mt: '8rem',
  gap: '2.5rem',

  '& div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export const SectionItems = styled('section', {
  mt: '10rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '3rem',
})

export const IconsContainer = styled('p', {
  backgroundColor: '$yellow',
  padding: '.5rem',
  width: '2.6rem',
  height: '2.6rem',
  borderRadius: '50px',

  variants: {
    style: {
      yellow: {
        backgroundColor: '$yellow'
      },
      yellowDark: {
        backgroundColor: '$yellowDark'
      },
      purple: {
        backgroundColor: '$purple'
      },
      gray: {
        backgroundColor: '$baseText'
        
      },
    },
  },
})