import { PropsWithChildren } from "react"
import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import { colors } from "../theme/colors"
import { Snackbar } from "./Snackbar"

export const AppWrapper = ({ children }: PropsWithChildren) => {
  return <SafeAreaView style={styles.safeArea}>
    <StatusBar barStyle='dark-content' backgroundColor={colors.background} />
    {children}
    <Snackbar />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.background,
  },
})