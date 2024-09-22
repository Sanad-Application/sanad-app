import { ActivityIndicator, StyleSheet, View } from "react-native"
import { colors } from "~theme"

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size='large' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})