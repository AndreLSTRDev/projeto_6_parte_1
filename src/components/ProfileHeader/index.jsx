import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Container } from '../../styles'
import { HeaderBar, Content, NavLink, Logo, CartButton } from './styles'

function ProfileHeader({ count, onOpenCart }) {
  return (
    <HeaderBar>
      <Container>
        <Content>
          <NavLink to="/">Restaurantes</NavLink>
          <Link to="/">
            <Logo src={logo} alt="efood" />
          </Link>
          <CartButton type="button" onClick={onOpenCart}>
            {count} produto(s) no carrinho
          </CartButton>
        </Content>
      </Container>
    </HeaderBar>
  )
}

export default ProfileHeader
