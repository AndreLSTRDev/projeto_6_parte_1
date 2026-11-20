import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#E66767',
  beige: '#FFEBD9',
  background: '#FFF8F2',
  white: '#FFFFFF',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.salmon};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    display: block;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
  }
`
