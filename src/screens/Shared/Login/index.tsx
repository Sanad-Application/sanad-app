import { useState } from 'react'
import { Button, Container, Input, ScrollContainer, Spacer } from '~components'
import { Welcome } from './Welcome'
import { NeedToRegister } from './NeedToRegister'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <ScrollContainer>
      <Container>
        <Welcome />
        <Input placeholder='البريد الالكتروني' value={email} onChange={setEmail} />
        <Input placeholder='كلمة المرور' password value={password} onChange={setPassword} />
        <Spacer h={24} />
        <Button title='تسجيل الدخول' loading={loading} onPress={() => setLoading(true)} />
        <NeedToRegister />
      </Container>
    </ScrollContainer>
  )
}

export default Login