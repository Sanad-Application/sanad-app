import { useState } from 'react'
import { Button, Container, Input, ScrollContainer, Spacer } from '~components'
import { Welcome } from './Welcome'
import { NeedToRegister } from './NeedToRegister'
import { authService } from '~services/auth'
import { useAppDispatch } from '~store/hooks'
import { login } from '~store/slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {
  // TODO: remove default values
  const [email, setEmail] = useState('sherbiny@gmail.com')
  const [password, setPassword] = useState('1100')
  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()

  const handleLogin = async () => {
    try {
      setLoading(true)
      const res = await authService.login(email, password)
      const { accessToken: token, user } = res.data.data

      await AsyncStorage.setItem('token', token)
      dispatch(login({ token, user }))
    } catch (error) {
      // TODO: handle error
      console.log("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollContainer>
      <Container>
        <Welcome />
        <Input placeholder='البريد الالكتروني' value={email} onChange={setEmail} />
        <Input placeholder='كلمة المرور' password value={password} onChange={setPassword} />
        <Spacer h={24} />
        <Button title='تسجيل الدخول' loading={loading} onPress={handleLogin} />
        <NeedToRegister />
      </Container>
    </ScrollContainer>
  )
}

export default Login