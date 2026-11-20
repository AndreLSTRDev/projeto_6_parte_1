import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.article`
  height: 100%;
  padding: 8px;
  background-color: ${colors.salmon};
  color: ${colors.beige};
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  button {
    margin-top: auto;
  }
`

export const Title = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
`

export const Description = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
`
