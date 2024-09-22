import { useState } from 'react'
import { Container, Input, Button, ScrollContainer, Spacer } from '~components'
import { Welcome } from './Welcome'
import { GoToLogin } from './GoToLogin'
import { authService } from '~services/auth'
import { checkRegisterData, constructRegisterData } from '~helpers'
import { useAppDispatch, useAppSelector } from '~store/hooks'
import { showSnack } from '~store/slices/uiSlice'
import { useAppNavigation } from '~hooks'

const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { isLawyer } = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const { navigate } = useAppNavigation()

  const nextScreen = () =>
    navigate("VerifyEmail", { email, password })

  const handleRegister = async () => {
    try {
      const errorMessage = checkRegisterData(name, email, password, confirmPassword)

      if (errorMessage)
        return dispatch(showSnack({ type: 'error', text: errorMessage }))

      setLoading(true)
      await authService.register(constructRegisterData(name, email, password), isLawyer)

      nextScreen()
    } catch (e) {
      // TODO: Handle error
      dispatch(showSnack({ type: 'error', text: "فشل انشاء الحساب, حاول مرة أخري" }))
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollContainer>
      <Container>
        <Welcome />
        <Input placeholder='الاسم الكامل' value={name} onChange={setName} />
        <Input placeholder='البريد الالكتروني' value={email} onChange={setEmail} />
        <Input placeholder='كلمة المرور' password value={password} onChange={setPassword} />
        <Input placeholder='تأكيد كلمة المرور' password value={confirmPassword} onChange={setConfirmPassword} />
        <Spacer h={24} />
        <Button title='انشاء حساب' loading={loading} onPress={handleRegister} />
        <GoToLogin />
      </Container>
    </ScrollContainer>
  )
}

export default Register