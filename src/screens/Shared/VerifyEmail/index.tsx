import { useState } from 'react'
import { Pressable, View } from 'react-native'
import { Button, P, Spacer } from '~components'
import { colors, globalStyles } from '~theme'
import { InputBox } from './InputBox'
import { useAppDispatch, useAppSelector } from '~store/hooks'
import { useAppNavigation } from '~hooks'
import { showSnack } from '~store/slices/uiSlice'
import { authService } from '~services/auth'
import { login } from '~store/slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import messaging from '@react-native-firebase/messaging'

const VerifyEmail = ({ route }: { route: any }) => {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)

  const { isLawyer } = useAppSelector(state => state.auth)
  const { email, password } = route.params
  const dispatch = useAppDispatch()
  const { navigate } = useAppNavigation()

  const nextStep = async () => {
    try {
      if (isLawyer)
        return navigate('LawyerInfo', { email, password })

      const fcmToken = await messaging().getToken()
      const res = await authService.login(email, password, fcmToken)

      await AsyncStorage.setItem('token', res.data.token)
      dispatch(login(res.data.user))
    } catch (e) {
      dispatch(showSnack({ type: 'error', text: "حدث خطأ ما" }))
    }
  }

  const handleVerify = async () => {
    try {
      setLoading(true)
      await authService.verifyEmail(email, code)
      await nextStep()
    } catch (e) {
      dispatch(showSnack({ type: 'error', text: "الكود المدخل غير صحيح" }))
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={globalStyles.container}>
      <Spacer h={20} />
      <P size={28}>أدخل كود التأكيد</P>
      <P size={16} color={colors.textLight}>لقد ارسلنا لك كود علي الايميل الخاص بك </P>
      <Spacer h={20} />
      <InputBox value={code} setValue={setCode} />
      <Spacer h={20} />
      <Button title='تأكيد' onPress={handleVerify} loading={loading} />
      <Pressable>
        {/* TODO: implement resend code */}
        <P size={16} color={colors.primary} style={{ textAlign: 'center' }}>إعادة ارسال الكود</P>
      </Pressable>
    </View>
  )
}

export default VerifyEmail