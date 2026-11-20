import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.article`
  max-width: 472px;
  width: 100%;
  background-color: ${colors.white};
`

export const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  padding: 8px;
  border: 1px solid ${colors.salmon};
  border-top: none;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`

export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
  line-height: 22px;
`
