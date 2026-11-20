import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const emptyAddress = {
  name: '',
  address: '',
  city: '',
  cep: '',
  number: '',
  complement: '',
}

function App() {
  const [cart, setCart] = useState([])
  const [address, setAddress] = useState(emptyAddress)
  const [orderId, setOrderId] = useState('')

  const completeOrder = () => {
    setOrderId(`#${Math.floor(100000 + Math.random() * 900000)}`)
    setCart([])
    setAddress(emptyAddress)
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/perfil/:id"
        element={
          <Restaurant
            cart={cart}
            setCart={setCart}
            address={address}
            setAddress={setAddress}
            orderId={orderId}
            onComplete={completeOrder}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
