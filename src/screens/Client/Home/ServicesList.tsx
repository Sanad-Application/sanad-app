import { StyleSheet, View } from "react-native"
import { SectionHeader, Spacer, SquerButton } from "~components"
import { heightPixel } from "~theme"
import { Images } from "~utils/images"

export const ServicesList = () => {
  return (
    <>
      <SectionHeader title="الخدمات" />
      <View style={styles.container}>
        <SquerButton
          title="الإستشارات"
          img={Images.consult}
          onPress={() => null}
          style={styles.button}
          active
        />

        <Spacer w={20} />

        <SquerButton
          title="الترافع في قضية"
          img={Images.case}
          onPress={() => null}
          style={styles.button}
          active
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  button: {
    backgroundColor: 'white',
  },
})