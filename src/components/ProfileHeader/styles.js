import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, colors } from '../../styles'
import pattern from '../../assets/pattern.svg'

export const HeaderBar = styled.header`
  padding: 40px 0 64px;
  background-color: ${colors.beige};
  background-image: url(${pattern});

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 0;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
  }
`

const text = css`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${colors.salmon};
`

export const NavLink = styled(Link)`
  ${text}
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const CartButton = styled.button`
  ${text}
  justify-self: end;
  border: none;
  background: none;
  text-align: right;

  @media (max-width: ${breakpoints.tablet}) {
    justify-self: center;
  }
`
