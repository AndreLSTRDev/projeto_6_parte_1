import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerContainer = styled.section`
  position: relative;
  height: 280px;
  background-size: cover;
  background-position: center;
  color: ${colors.white};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  > div {
    position: relative;
    z-index: 1;
    height: 100%;
  }
`

export const Content = styled.div`
  height: 100%;
  padding: 24px 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Category = styled.span`
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
`
