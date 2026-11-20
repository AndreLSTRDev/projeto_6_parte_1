import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

// primary: botão "Saiba mais" (fundo salmão, texto bege)
// secondary: botões dentro dos cards salmão (fundo bege, texto salmão, largura total)
const base = css`
  display: inline-block;
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;

  ${({ $variant }) =>
    $variant === 'secondary'
      ? css`
          width: 100%;
          padding: 4px;
          background-color: ${colors.beige};
          color: ${colors.salmon};
        `
      : css`
          padding: 4px 6px;
          background-color: ${colors.salmon};
          color: ${colors.beige};
        `}
`

export const ButtonContainer = styled.button`
  ${base}
`

export const ButtonLink = styled(Link)`
  ${base}
`
