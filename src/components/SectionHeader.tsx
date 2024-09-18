import { View, StyleSheet } from "react-native"
import { heightPixel } from "~theme"
import { P } from "./P"

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <P size={16} fw='bold'>{title}</P>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: heightPixel(12),
  },
})