import { StyleSheet, View } from "react-native"
import { Button, P } from "~components"
import { colors, widthPixel } from "~theme"
import { Request } from "~types"

export const RequestTab = ({ data }: { data: Request }) => {
  const goToRequestScreen = () => null

  return (
    <View style={styles.container}>
      <P color={colors.primary} fw="bold" center>{data.title}</P>
      <P color={colors.textLight} center>{data.description}</P>
      <View style={styles.btnRow}>
        <Button title="قبول" style={styles.btn} onPress={goToRequestScreen} />
        <Button title="رفض" style={styles.btn} revert onPress={goToRequestScreen} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.textLight + '50',
    borderWidth: widthPixel(1),
    borderRadius: widthPixel(8),
    marginBottom: widthPixel(16),
    padding: widthPixel(16),
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: widthPixel(16),
  },

  btn: {
    width: '30%',
    paddingVertical: widthPixel(8),
    borderRadius: widthPixel(8),
  },
})