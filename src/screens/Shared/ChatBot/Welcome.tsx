import { Image, StyleSheet, View } from "react-native"
import { P, Spacer } from "~components"
import { colors, widthPixel, heightPixel } from "~theme"
import { Images } from "~utils/images"

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={Images.chatWelcome} />
      </View>
      <P size={32} fw="bold">!مرحبا بك</P>
      <Spacer h={8} />
      <P size={12} color={colors.textLight} center>نحن هنا لمساعدتك في الإجابة على أسئلتك القانونية وتقديم التوصيات. سواء
        كنت بحاجة إلى استشارة قانونية أو معلومات حول العقود والتأشيرات، نحن
        جاهزون لدعمك.</P>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthPixel(24),
    marginBottom: heightPixel(60),
  },
  imgContainer: {
    marginBottom: heightPixel(24),
  },
})