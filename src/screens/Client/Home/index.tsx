import { Container, ScrollContainer } from '~components'
import { SearchBar } from './SearchBar'
import { HomeCarousel } from './Carousel'
import { ServicesList } from './ServicesList'
import { LawyersList } from './LawyersList'
import { HomeHeader } from './HomeHeader'

const Home = () => {
  return (
    <ScrollContainer>
      <HomeHeader />
      <Container>
        <SearchBar />
        <HomeCarousel />
        <ServicesList />
        <LawyersList />
      </Container>
    </ScrollContainer>
  )
}

export default Home