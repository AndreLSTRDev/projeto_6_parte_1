import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px;
  background-color: ${colors.salmon};
  color: ${colors.white};
  display: flex;
  gap: 24px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    flex-shrink: 0;
  }

  button:last-child {
    width: auto;
    padding: 4px 7px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    img {
      width: 100%;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background: none;
  color: ${colors.white};
  font-size: 24px;
  line-height: 16px;
`

export const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`

export const Text = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`
