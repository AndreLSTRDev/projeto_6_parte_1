import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { HeroContainer, Logo, Title } from './styles'

function Hero() {
  return (
    <HeroContainer>
      <Link to="/">
        <Logo src={logo} alt="efood" />
      </Link>
      <Title>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </Title>
    </HeroContainer>
  )
}

export default Hero
