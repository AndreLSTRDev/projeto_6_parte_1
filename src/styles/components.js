
import styled from 'styled-components'

export const coral = '#e6676b'
export const pale = '#fff0e3'

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  width: min(1024px, calc(100% - 40px));
  margin: 38px auto 60px;
  flex: 1;
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  color: ${({ $light }) => ($light ? coral : '#fff')};
  background: ${({ $light }) => ($light ? pale : coral)};
  width: ${({ $full }) => ($full ? '100%' : 'auto')};
  transition: filter 0.15s;

  &:hover {
    filter: brightness(0.96);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`

export const HeaderBar = styled.header`
  background: #ffead8;
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px max(24px, calc((100% - 1024px) / 2));
  font-size: 14px;
  font-weight: 700;
`

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  flex-shrink: 0;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const HeaderLink = styled.a`
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`

export const CartLink = styled.button`
  border: 0;
  background: transparent;
  color: ${coral};
  font-weight: 700;
  text-align: right;
  cursor: pointer;
`

export const Hero = styled.section`
  background: #ffead8;
  text-align: center;
  padding: 38px 20px 42px;
  background-image: radial-gradient(#f8d9c7 0.7px, transparent 0.7px);
  background-size: 12px 12px;

  h1 {
    max-width: 620px;
    margin: 0 auto;
    font-size: clamp(25px, 4vw, 38px);
    line-height: 1.15;
  }
`

export const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 80px;
  row-gap: 28px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const RestaurantCardBox = styled.article`
  min-width: 0;
  background: #fff;
  border: 1px solid ${coral};
  box-shadow: 0 1px 3px #e6676b33;
`

export const ImageWrap = styled.div`
  height: 217px;
  position: relative;
  overflow: hidden;
  background: #f4d7c7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.25s;
  }

  ${RestaurantCardBox}:hover & img {
    transform: scale(1.03);
  }

  @media (max-width: 520px) {
    height: 200px;
  }
`

export const Tag = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${coral};
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 9px;
`

export const CardContent = styled.div`
  padding: 12px;
`

export const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-bottom: 8px;
`

export const CardTitle = styled.h2`
  font-size: 16px;
  line-height: 1.25;
  font-weight: 700;
  margin: 0;
`

export const Rating = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  white-space: nowrap;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin: 0 0 12px;
`

export const Banner = styled.section`
  min-height: 210px;
  display: flex;
  align-items: end;
  padding: 30px max(24px, calc((100% - 1024px) / 2));
  color: white;
  background:
    linear-gradient(90deg, #0009, #0002),
    url(${(p) => p.$image}) center/cover;

  h1 {
    margin: 6px 0 0;
    font-size: clamp(26px, 4vw, 36px);
  }

  span {
    font-size: 15px;
  }
`

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

export const DishCard = styled.article`
  padding: 8px;
  background: ${coral};
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    width: 100%;
    height: 165px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    margin: 2px 0 0;
  }

  p {
    font-size: 12px;
    line-height: 1.5;
    margin: 0;
    flex: 1;
  }

  ${Button} {
    margin-top: 4px;
  }
`

export const FooterBox = styled.footer`
  background: #ffead8;
  padding: 28px 20px 22px;
  text-align: center;

  p {
    max-width: 700px;
    margin: 22px auto 0;
    font-size: 10px;
    line-height: 1.5;
  }
`

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    border-radius: 50%;
    background: ${coral};
    color: white;
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    font-size: 11px;
    font-weight: 700;
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  background: #000b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const ModalBox = styled.div`
  position: relative;
  width: min(850px, 100%);
  max-height: 90vh;
  overflow: auto;
  background: ${coral};
  color: white;
  padding: 22px;
  display: grid;
  grid-template-columns: minmax(160px, 260px) 1fr;
  gap: 22px;

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }

  h2 {
    margin: 0 0 12px;
    font-size: 21px;
  }

  p {
    font-size: 13px;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    img {
      height: 190px;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  border: 0;
  background: transparent;
  color: inherit;
  font-size: 23px;
  cursor: pointer;
`

export const Backdrop = styled(Overlay)`
  justify-content: flex-end;
  padding: 0;
`

export const SidePanel = styled.aside`
  width: min(420px, 100%);
  height: 100%;
  overflow-y: auto;
  background: ${coral};
  color: white;
  padding: 24px;

  h2 {
    font-size: 21px;
    margin: 0 0 20px;
  }
`

export const CartItem = styled.div`
  background: ${pale};
  color: ${coral};
  padding: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 76px 1fr auto;
  gap: 10px;
  align-items: center;

  img {
    width: 76px;
    height: 65px;
    object-fit: cover;
  }

  strong {
    display: block;
    font-size: 13px;
    margin-bottom: 5px;
  }

  span {
    font-size: 12px;
  }
`

export const Remove = styled.button`
  border: 0;
  background: transparent;
  color: ${coral};
  font-size: 18px;
  padding: 4px;
  cursor: pointer;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin: 24px 0 14px;
  font-weight: 700;
  font-size: 14px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
    font-weight: 700;
  }

  input {
    width: 100%;
    border: 0;
    padding: 11px;
    color: #5c3333;
    background: ${pale};
    min-width: 0;
  }

  input:focus {
    outline: 2px solid #8c3b40;
  }
`

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

export const ButtonStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
`

export const Message = styled.p`
  font-size: 13px;
  line-height: 1.7;
`

export const Empty = styled.div`
  padding: 30px 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.5;
`

export const FloatingButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 5;
  border: 0;
  background: ${coral};
  color: white;
  padding: 13px 17px;
  border-radius: 30px;
  font-weight: 700;
  box-shadow: 0 4px 18px #0002;
  cursor: pointer;
`
