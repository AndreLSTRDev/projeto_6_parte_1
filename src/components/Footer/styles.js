import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  padding: 40px 16px;
  background-color: ${colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const Socials = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`

export const SocialLink = styled.a`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.salmon};
  color: ${colors.beige};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`
  max-width: 480px;
  margin-top: 80px;
  font-size: 10px;
  line-height: 12px;
`
