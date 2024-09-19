import { PropsWithChildren } from "react"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { colors } from "../theme/colors"

export const AppWrapper = ({ children }: PropsWithChildren) => {
  return <SafeAreaView style={styles.safeArea}>
    {children}
    <StatusBar barStyle='dark-content' backgroundColor={colors.background} />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.background,
  },
})