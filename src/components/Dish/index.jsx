import Button from '../Button'
import { Card, Title, Description } from './styles'

const resume = (text) => (text.length > 132 ? `${text.slice(0, 129)}...` : text)

function Dish({ image, name, description, onClick }) {
  return (
    <Card>
      <img src={image} alt={name} />
      <Title>{name}</Title>
      <Description>{resume(description)}</Description>
      <Button variant="secondary" onClick={onClick}>
        Adicionar ao carrinho
      </Button>
    </Card>
  )
}

export default Dish
