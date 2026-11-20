import styled from 'styled-components'
import { breakpoints, Container } from '../../styles'
import Restaurant from '../Restaurant'

const Section = styled.section`
  padding: 80px 0 120px;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  justify-content: space-between;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

function RestaurantList({ restaurants }) {
  return (
    <Section>
      <Container>
        <List>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id}>
              <Restaurant {...restaurant} />
            </li>
          ))}
        </List>
      </Container>
    </Section>
  )
}

export default RestaurantList
