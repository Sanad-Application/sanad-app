import { View } from 'react-native'
import { P } from '~components'
import { globalStyles } from '~theme'
import { SearchBar } from './SearchBar'
import { HomeCarousel } from './Carousel'
import { ServicesList } from './ServicesList'

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <SearchBar />
      <HomeCarousel />
      <ServicesList />
    </View>
  )
}

export default Home