import { Image, Pressable, StyleSheet, View } from "react-native"
import { Icon, P } from "~components"
import { colors, globalStyles, heightPixel, widthPixel } from "~theme"
import { Icons, Images } from "~utils/images"

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: heightPixel(56), flex: .3 }}>
        <Image source={Images.homeHeader} style={globalStyles.image} />
      </View>
      <Pressable>
        <Icon source={Icons.bell} size={28} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: widthPixel(20),
    backgroundColor: colors.background,
  },
})