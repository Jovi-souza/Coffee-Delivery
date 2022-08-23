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
  width: '60rem',
  mt: '8rem',
  gap: '2.5rem',

  '& div': {
    display: 'flex',
    width: '28rem',
  },

  '& .icons': {
    backgroundColor: '$yellow',
    width: 'max-content',
    height: 'max-content',
    padding: '.3rem',
    borderRadius: '50px',

    '& svg': {
      variants: {
        back: {
          yellow: '$yellow',
          gray: '$baseText',
        },
      },
    }
  }
})

export const SectionItems = styled('section', {
  mt: '10rem',
  display: 'flex',
  gap: '3rem',
  flexWrap: 'wrap'
})