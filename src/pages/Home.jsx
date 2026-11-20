import Hero from '../components/Hero'
import RestaurantList from '../components/RestaurantList'
import Footer from '../components/Footer'
import { restaurants } from '../data'

function Home() {
  return (
    <>
      <Hero />
      <RestaurantList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
