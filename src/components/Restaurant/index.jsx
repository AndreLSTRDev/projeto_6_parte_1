import Tag from '../Tag'
import Button from '../Button'
import {
  Card,
  ImageWrapper,
  Infos,
  Content,
  TitleRow,
  Title,
  Rating,
  Description,
} from './styles'

function Star() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#FFB930"
        d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21.2l1.6-7L2 9.5l7.1-.6z"
      />
    </svg>
  )
}

function Restaurant({ id, image, name, category, rating, description, featured }) {
  return (
    <Card>
      <ImageWrapper>
        <img src={image} alt={name} />
        <Infos>
          {featured && <Tag>Destaque da semana</Tag>}
          <Tag>{category}</Tag>
        </Infos>
      </ImageWrapper>
      <Content>
        <TitleRow>
          <Title>{name}</Title>
          <Rating>
            {rating.toFixed(1)} <Star />
          </Rating>
        </TitleRow>
        <Description>{description}</Description>
        <Button to={`/perfil/${id}`} title={`Saiba mais sobre ${name}`}>
          Saiba mais
        </Button>
      </Content>
    </Card>
  )
}

export default Restaurant
