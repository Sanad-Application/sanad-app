import { StatusBar, StyleSheet, View } from "react-native"
import { BackButton } from "~components"
import { colors, heightPixel, widthPixel } from "~theme"

export const TopSection = () => {
  return (
    <View style={styles.container}>
      <BackButton light />
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: widthPixel(24),
    paddingTop: heightPixel(32),
    borderBottomEndRadius: widthPixel(24),
    borderBottomStartRadius: widthPixel(24),
    backgroundColor: colors.primary,
  },
})