import { StyleSheet, View } from "react-native"
import { SectionHeader, Spacer, SquerButton } from "~components"
import { useAppNavigation } from "~hooks"
import { heightPixel } from "~theme"
import { Images } from "~utils/images"

export const ServicesList = () => {
  const { navigate } = useAppNavigation()

  const goToChatBot = () => navigate('ChatBot')

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

        <Spacer w={20} />

        <SquerButton
          title="شات بوت"
          img={Images.chatbot}
          onPress={goToChatBot}
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