import { View } from "react-native"
import { P, Spacer } from "~components"
import { colors } from "~theme"

export const Welcome = () => {
  return <View>
    <Spacer h={24} />
    <P size={28} fw='bold'>أهلا</P>
    <P size={20} color={colors.textLight}>سعداء لرؤيتك</P>
    <Spacer h={24} />
  </View>
}