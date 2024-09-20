import { View, StyleSheet, Pressable, Image, ImageSourcePropType } from "react-native"
import { P } from "~components"
import { colors, globalStyles, widthPixel } from "~theme"

type ChooseButtonProps = {
  title: string
  onPress: () => void
  active?: boolean
  img?: ImageSourcePropType
  imgUri?: string
  style?: object
}

export const ChooseButton = ({ title, onPress, active, img, imgUri, style }: ChooseButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.square, style, active && styles.squareActive]}>
        <Image source={img || { uri: imgUri }} style={globalStyles.image} />
      </View>
      <P fw="medium" size={16} color={active ? colors.text : colors.textLight}>{title}</P>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: widthPixel(100),
    height: widthPixel(100),
    padding: widthPixel(20),
    borderRadius: widthPixel(20),
    backgroundColor: colors.backgroundLight
  },
  squareActive: {
    backgroundColor: colors.primaryLight
  }
})