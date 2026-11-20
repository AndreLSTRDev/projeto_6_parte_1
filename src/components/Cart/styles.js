import styled from 'styled-components'
import { colors } from '../../styles'

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  width: 360px;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 32px 8px;
  background-color: ${colors.salmon};
  color: ${colors.beige};
`

export const Heading = styled.h3`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  padding: 8px 8px 12px;
  background-color: ${colors.beige};
  color: ${colors.salmon};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h4 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
    line-height: 21px;
  }

  span {
    font-size: 14px;
    line-height: 22px;
  }
`

export const Remove = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  border: none;
  background: none;
  color: ${colors.salmon};
  font-size: 18px;
`

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }

  input {
    height: 32px;
    padding: 0 8px;
    border: none;
    background-color: ${colors.beige};
    color: #4b4b4b;
    font-size: 14px;
    font-weight: 700;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`

export const Message = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 22px;
`
