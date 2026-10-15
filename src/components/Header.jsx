
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {
  HeaderBar,
  Logo,
  HeaderLink,
  CartLink,
} from '../styles/components'

function Header({ count, onOpenCart }) {
  return (
    <HeaderBar>
      <HeaderLink as={Link} to="/">
        Restaurantes
      </HeaderLink>

      <Logo as={Link} to="/" aria-label="eFood página inicial">
        <img src={logo} alt="eFood" />
      </Logo>

      <CartLink onClick={onOpenCart}>
        {count} produto(s) no carrinho
      </CartLink>
    </HeaderBar>
  )
}

export default Header
