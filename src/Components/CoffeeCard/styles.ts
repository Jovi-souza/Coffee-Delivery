import { styled } from "../../styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  width: '38vw',
  padding: '3rem',
  backgroundColor: '$baseCard',

  '& div': {
    display: 'flex'
  }
})