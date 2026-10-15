
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { restaurants } from '../data'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductModal from '../components/ProductModal'
import Cart from '../components/Cart'
import {
  Page,
  Main,
  Banner,
  MenuGrid,
  DishCard,
  Button,
  FloatingButton,
} from '../styles/components'

function Restaurant({
  cart,
  setCart,
  cartStep,
  setCartStep,
  address,
  setAddress,
  onComplete,
}) {
  const { id } = useParams()
  const navigate = useNavigate()

  const restaurant = restaurants.find((item) => item.id === id)

  const [selectedDish, setSelectedDish] = useState(null)
  const [showCart, setShowCart] = useState(false)

  const addDish = (dish) => {
    setCart((old) => [
      ...old,
      { ...dish, restaurantId: restaurant.id },
    ])
  }

  const removeDish = (index) => {
    setCart((old) => old.filter((_, i) => i !== index))
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const showSidebar = (step = 'cart') => {
    setCartStep(step)
    setShowCart(true)
  }

  if (!restaurant) {
    return (
      <Page>
        <Main>
          <h1>Restaurante não encontrado</h1>
          <Button onClick={() => navigate('/')}>
            Voltar aos restaurantes
          </Button>
        </Main>
        <Footer />
      </Page>
    )
  }

  return (
    <Page>
      <Header
        count={cart.length}
        onOpenCart={() => showSidebar('cart')}
      />

      <Banner $image={restaurant.image}>
        <div>
          <span>{restaurant.category}</span>
          <h1>{restaurant.name}</h1>
        </div>
      </Banner>

      <Main>
        <MenuGrid>
          {restaurant.dishes.concat(restaurant.dishes).map((dish, index) => (
            <DishCard key={`${dish.id}-${index}`}>
              <img
                src={dish.image}
                alt={dish.name}
                loading="lazy"
              />

              <h3>{dish.name}</h3>

              <p>{dish.description.split('. ')[0]}.</p>

              <Button
                $light
                $full
                onClick={() => setSelectedDish(dish)}
              >
                Mais detalhes
              </Button>
            </DishCard>
          ))}
        </MenuGrid>
      </Main>

      <Footer />

      {selectedDish && (
        <ProductModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onAdd={addDish}
        />
      )}

      {showCart && (
        <Cart
          step={cartStep}
          setStep={setCartStep}
          cart={cart}
          onRemove={removeDish}
          total={total}
          onClose={() => setShowCart(false)}
          address={address}
          setAddress={setAddress}
          onComplete={onComplete}
        />
      )}

      <FloatingButton onClick={() => showSidebar('cart')}>
        🛒 Carrinho ({cart.length})
      </FloatingButton>
    </Page>
  )
}

export default Restaurant
