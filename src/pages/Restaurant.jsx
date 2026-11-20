import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { restaurants } from '../data'
import ProfileHeader from '../components/ProfileHeader'
import Banner from '../components/Banner'
import DishList from '../components/DishList'
import Footer from '../components/Footer'
import ProductModal from '../components/ProductModal'
import Cart from '../components/Cart'
import { Container } from '../styles'

function Restaurant({ cart, setCart, address, setAddress, orderId, onComplete }) {
  const { id } = useParams()
  const restaurant = restaurants.find((item) => item.id === id)

  const [selectedDish, setSelectedDish] = useState(null)
  const [showCart, setShowCart] = useState(false)
  const [cartStep, setCartStep] = useState('cart')

  if (!restaurant) {
    return (
      <Container style={{ padding: '80px 0' }}>
        <h2>Restaurante não encontrado</h2>
        <Link to="/">Voltar para a home</Link>
      </Container>
    )
  }

  const addDish = (dish) => setCart((old) => [...old, dish])
  const removeDish = (index) => setCart((old) => old.filter((_, i) => i !== index))
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <>
      <ProfileHeader count={cart.length} onOpenCart={() => setShowCart(true)} />
      <Banner image={restaurant.image} category={restaurant.category} title={restaurant.name} />
      {/* O layout do Figma exibe 6 pratos por restaurante */}
      <DishList dishes={[...restaurant.dishes, ...restaurant.dishes]} onSelect={setSelectedDish} />
      <Footer />

      {selectedDish && (
        <ProductModal dish={selectedDish} onClose={() => setSelectedDish(null)} onAdd={addDish} />
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
          orderId={orderId}
        />
      )}
    </>
  )
}

export default Restaurant
