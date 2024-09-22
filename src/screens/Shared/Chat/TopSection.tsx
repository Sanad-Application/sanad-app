import { Image, Pressable, StatusBar, StyleSheet, View } from "react-native"
import { BackButton, Icon, P } from "~components"
import { colors, globalStyles, heightPixel, widthPixel } from "~theme"
import { Icons, Images } from "~utils/images"

export const TopSection = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <BackButton light />
      <View style={styles.mainRow}>
        <View style={globalStyles.row}>
          <View style={styles.avatar}>
            <Image source={Images.ex_lawyer} style={globalStyles.image} />
          </View>
          <View>
            <P color="white" size={16} fw="medium">استاذ احمد</P>
            <P color="white">محامي استشاري</P>
          </View>
        </View>
        <View style={globalStyles.row}>
          <Pressable style={styles.btn}>
            <Icon source={Icons.call} size={24} />
          </Pressable>
          <Pressable style={styles.btn}>
            <Icon source={Icons.video} size={24} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPixel(24),
    paddingTop: heightPixel(32),
    borderBottomEndRadius: widthPixel(24),
    borderBottomStartRadius: widthPixel(24),
    backgroundColor: colors.primary,
  },

  mainRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: heightPixel(24),
  },

  avatar: {
    width: widthPixel(48),
    height: widthPixel(48),
    borderRadius: widthPixel(24),
    marginRight: widthPixel(16),
    borderWidth: 2,
    borderColor: colors.secondary,
    backgroundColor: colors.white,
    overflow: "hidden",
  },

  btn: {
    marginLeft: widthPixel(16),
    backgroundColor: colors.white,
    padding: widthPixel(8),
    borderRadius: widthPixel(12),
    borderWidth: 1,
    borderColor: colors.textLight,
  },
})