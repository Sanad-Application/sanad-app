import { Pressable, StyleSheet, View } from "react-native"
import { Icon, P } from "~components"
import { colors, widthPixel } from "~theme"
import { Icons } from "~utils/images"

export const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <P fw="bold" size={28}>سند</P>
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