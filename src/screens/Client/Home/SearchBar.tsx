import { StyleSheet, TextInput, View } from "react-native"
import { Icon, Input, P } from "~components"
import { colors, fontPixel, heightPixel } from "~theme"
import { Icons } from "~utils/images"

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon source={Icons.search} size={28} />
      <TextInput
        placeholder="ابحث من هنا"
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: heightPixel(10),
    paddingHorizontal: heightPixel(16),
    borderRadius: heightPixel(16),
  },

  input: {
    flex: 1,
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginLeft: heightPixel(10),
    fontSize: fontPixel(16),
    textAlign: 'right',
  },
})