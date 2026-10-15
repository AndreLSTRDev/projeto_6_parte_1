
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FooterBox, Logo, Socials } from '../styles/components'

function Footer() {
  return (
    <FooterBox>
      <Logo as={Link} to="/" aria-label="eFood página inicial">
        <img src={logo} alt="eFood" />
      </Logo>

      <Socials>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          ◎
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          f
        </a>

        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
        >
          ♥
        </a>
      </Socials>

      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterBox>
  )
}

export default Footer
