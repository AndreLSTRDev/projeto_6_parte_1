import styled from 'styled-components'
import { breakpoints, Container } from '../../styles'
import Dish from '../Dish'

const Section = styled.section`
  padding: 56px 0 120px;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

function DishList({ dishes, onSelect }) {
  return (
    <Section>
      <Container>
        <List>
          {dishes.map((dish, index) => (
            <li key={`${dish.id}-${index}`}>
              <Dish {...dish} onClick={() => onSelect(dish)} />
            </li>
          ))}
        </List>
      </Container>
    </Section>
  )
}

export default DishList
