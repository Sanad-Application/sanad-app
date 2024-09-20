import { Pressable, StyleSheet, View } from "react-native"
import { P } from "./P"
import { Icon } from "./Icon"
import { Icons } from "~utils/images"
import { colors, heightPixel, widthPixel } from "~theme"

type TabButtonProps = {
  title: string
  subtitle: string
  onPress: () => void
}

export const TabButton = ({ title, subtitle, onPress }: TabButtonProps) => {
  return <Pressable style={styles.container} onPress={onPress}>
    <View style={styles.row}>
      <P size={16}>{title}</P>
      <Icon source={Icons.arrowCircle} />
    </View>
    <P color={colors.textLight}>{subtitle}</P>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    padding: widthPixel(16),
    borderColor: colors.textLight + '50',
    borderWidth: 1,
    borderRadius: widthPixel(8),
    marginBottom: heightPixel(16),
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})