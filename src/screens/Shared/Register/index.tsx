import { useState } from 'react'
import { Container, Input, Button, ScrollContainer, Spacer } from '~components'
import { Welcome } from './Welcome'
import { GoToLogin } from './GoToLogin'

const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <ScrollContainer>
      <Container>
        <Welcome />
        <Input placeholder='الاسم الكامل' value={name} onChange={setName} />
        <Input placeholder='البريد الالكتروني' value={email} onChange={setEmail} />
        <Input placeholder='كلمة المرور' password value={password} onChange={setPassword} />
        <Input placeholder='تأكيد كلمة المرور' password value={confirmPassword} onChange={setConfirmPassword} />
        <Spacer h={24} />
        <Button title='انشاء حساب' loading={loading} onPress={() => setLoading(true)} />
        <GoToLogin />
      </Container>
    </ScrollContainer>
  )
}

export default Register