
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { restaurants } from '../data'
import Footer from '../components/Footer'
import RestaurantCard from '../components/RestaurantCard'
import {
  Page,
  Main,
  Hero,
  Logo,
  RestaurantGrid,
} from '../styles/components'

function Home() {
  return (
    <Page>
      <Hero>
        <Logo as={Link} to="/" style={{ margin: '0 auto 28px' }}>
          <img src={logo} alt="eFood" />
        </Logo>

        <h1>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </h1>
      </Hero>

      <Main>
        <RestaurantGrid>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </RestaurantGrid>
      </Main>

      <Footer />
    </Page>
  )
}

export default Home
