
import { Link } from 'react-router-dom'
import {
  RestaurantCardBox,
  ImageWrap,
  Tag,
  CardContent,
  CardTitleRow,
  CardTitle,
  Rating,
  Description,
  Button,
} from '../styles/components'

function RestaurantCard({ restaurant }) {
  return (
    <RestaurantCardBox>
      <ImageWrap>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          loading="lazy"
        />

        {restaurant.featured && (
          <Tag style={{ left: 12, right: 'auto' }}>
            Destaque da semana
          </Tag>
        )}

        <Tag>{restaurant.category}</Tag>
      </ImageWrap>

      <CardContent>
        <CardTitleRow>
          <CardTitle>{restaurant.name}</CardTitle>
          <Rating>{restaurant.rating.toFixed(1)} ⭐</Rating>
        </CardTitleRow>

        <Description>{restaurant.description}</Description>

        <Button as={Link} to={`/restaurante/${restaurant.id}`}>
          Saiba mais
        </Button>
      </CardContent>
    </RestaurantCardBox>
  )
}

export default RestaurantCard
