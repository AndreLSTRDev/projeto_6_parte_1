import { Container } from '../../styles'
import { BannerContainer, Content, Category, Title } from './styles'

function Banner({ image, category, title }) {
  return (
    <BannerContainer style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <Content>
          <Category>{category}</Category>
          <Title>{title}</Title>
        </Content>
      </Container>
    </BannerContainer>
  )
}

export default Banner
