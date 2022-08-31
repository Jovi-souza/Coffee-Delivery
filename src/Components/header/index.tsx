import Logo from '../../images/Logo.svg'
import { Container, LocaleAndCart, ShoppingCartContainer } from "./styles";
import { House, MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../../Contexts/CardsContext';

export function Header() {
  const {items} = useContext(CardContext)
  
  return (
    <Container>
      <img src={Logo} />
      <LocaleAndCart>
        <p>
          <MapPin weight='fill' color='purple' size={16}/> 
          Esperança, PB
        </p>
        <ShoppingCartContainer>
          <NavLink className='NavLink' to="/" title="Home">
            <House weight='fill' size={16} color='orange'/>
          </NavLink>
          <NavLink className='NavLink' to="/Checkout" title="Cart">
            <ShoppingCart weight='fill' size={16} color='orange'/>
          </NavLink>
          <p>{items}</p>
        </ShoppingCartContainer>
      </LocaleAndCart >
    </Container>
  )
}