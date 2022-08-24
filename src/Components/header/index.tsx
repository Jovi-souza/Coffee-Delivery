import Logo from '../../images/Logo.svg'
import { Container, LocaleAndCart, ShoppingCartContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <Container>
      <img src={Logo} />
      <LocaleAndCart>
        <p>
          <MapPin weight='fill' color='purple' size={16}/> 
          Esperança, PB
        </p>
        <ShoppingCartContainer >
          <ShoppingCart weight='fill' size={16}/>
          <p>20</p>
        </ShoppingCartContainer>
      </LocaleAndCart >
    </Container>
  )
}