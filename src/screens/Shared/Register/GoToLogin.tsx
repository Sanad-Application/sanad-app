import { Pressable } from "react-native"
import { P } from "~components"
import { useAppNavigation } from "~hooks"
import { colors, globalStyles } from "~theme"

export const GoToLogin = () => {
  const { navigate } = useAppNavigation()

  const handlePress = () => navigate('Login')

  return <Pressable onPress={handlePress} style={[globalStyles.row, { justifyContent: 'center' }]}>
    <P size={16} color={colors.textLight}>لديك حساب بالفعل؟ </P>
    <P size={16} color='#666' fw="medium">تسجيل الدخول</P>
  </Pressable>
}