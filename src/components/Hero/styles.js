import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import pattern from '../../assets/pattern.svg'

export const HeroContainer = styled.header`
  height: 384px;
  padding: 40px 0;
  background-color: ${colors.beige};
  background-image: url(${pattern});
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 40px 16px 56px;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const Title = styled.h1`
  max-width: 539px;
  margin-top: 138px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 56px;
    font-size: 26px;
    line-height: 32px;
  }
`
