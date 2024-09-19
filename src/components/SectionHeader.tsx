import { View, StyleSheet, Pressable } from "react-native"
import { colors, globalStyles, heightPixel } from "~theme"
import { P } from "./P"
import { Icon } from "./Icon"
import { Icons } from "~utils/images"

type SectionHeaderProps = {
  title: string,
  onViewAll?: () => void,
}

export const SectionHeader = ({ title, onViewAll }: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <P size={16} fw='bold'>{title}</P>
      {onViewAll && <Pressable onPress={onViewAll} style={globalStyles.row}>
        <P size={14} color={colors.textLight}>عرض الكل</P>
        <Icon source={Icons.arrowLeft} size={16} color={colors.textLight} />
      </Pressable>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: heightPixel(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})