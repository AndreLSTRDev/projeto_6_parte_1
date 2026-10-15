
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Page, Main, Button } from './styles/components'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

function App() {
  const [cart, setCart] = useState([])
  const [cartStep, setCartStep] = useState('cart')

  const [address, setAddress] = useState({
    name: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: '',
  })

  const [orderId, setOrderId] = useState('')

  const onComplete = () => {
    setOrderId(`EF-${Math.floor(100000 + Math.random() * 900000)}`)
    setCart([])
  }

  onComplete.orderId = orderId

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/restaurante/:id"
        element={
          <Restaurant
            cart={cart}
            setCart={setCart}
            cartStep={cartStep}
            setCartStep={setCartStep}
            address={address}
            setAddress={setAddress}
            onComplete={onComplete}
          />
        }
      />

      <Route
        path="*"
        element={
          <Page>
            <Main>
              <h1>Página não encontrada</h1>
              <Button as={Link} to="/">
                Voltar ao início
              </Button>
            </Main>
            <Footer />
          </Page>
        }
      />
    </Routes>
  )
}

export default App
