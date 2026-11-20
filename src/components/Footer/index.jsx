import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { FooterContainer, Logo, Socials, SocialLink, Text } from './styles'

const icons = {
  instagram: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M22 5.9c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.9.1.5 1.6 2 2.8 3.8 2.9A8.3 8.3 0 0 1 2 18.5 11.7 11.7 0 0 0 8.3 20.3c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z" />
    </svg>
  ),
}

function Footer() {
  return (
    <FooterContainer>
      <Link to="/">
        <Logo src={logo} alt="efood" />
      </Link>
      <Socials>
        <li>
          <SocialLink href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            {icons.instagram}
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            {icons.facebook}
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            {icons.twitter}
          </SocialLink>
        </li>
      </Socials>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </FooterContainer>
  )
}

export default Footer
