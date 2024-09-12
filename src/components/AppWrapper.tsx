import { PropsWithChildren } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { colors } from "../theme/colors"

export const AppWrapper = ({children}: PropsWithChildren) => {
  return <SafeAreaView style={styles.safeArea}>
    {children}
  </SafeAreaView>
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.background,
  },
})