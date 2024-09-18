import { View } from 'react-native'
import { P } from '~components'
import { globalStyles } from '~theme'
import { SearchBar } from './SearchBar'
import { HomeCarousel } from './Carousel'

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <SearchBar />
      <HomeCarousel />
    </View>
  )
}

export default Home