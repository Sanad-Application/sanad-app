import { Dimensions, Image, StyleSheet, View } from "react-native"
import Carousel from 'react-native-reanimated-carousel'
import { heightPixel, widthPixel } from "~theme"
import { Images } from "~utils/images"

export const HomeCarousel = () => {
  const data = [...new Array(4).keys()]
  const width = Dimensions.get('window').width - widthPixel(20) * 2

  const renderItem = ({ item }: { item: number }) => {
    return (
      <View style={styles.imgContainer}>
        <Image source={Images.homeCarousel[item]} style={styles.img} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Carousel
        renderItem={renderItem}
        data={data}
        width={width}
        pagingEnabled
        loop
        autoPlay
        autoPlayInterval={3000}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: heightPixel(155),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightPixel(20),
  },
  imgContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(12),
  },
  img: {
    width: '100%',
    height: '100%',
  }
})