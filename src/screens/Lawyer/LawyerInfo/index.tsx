import { useState } from 'react'
import { Button, Container, Input, P, ScrollContainer, Spacer } from '~components'
import { authService } from '~services/auth'
import { useAppDispatch } from '~store/hooks'
import AsyncStorage from '@react-native-async-storage/async-storage'
import messaging from '@react-native-firebase/messaging'
import { login } from '~store/slices/authSlice'

const LawyerInfo = ({ route }: any) => {
  const { email, password } = route.params

  const [bio, setBio] = useState('')
  const [hourlyRate, setHourlyRate] = useState('')
  const [location, setLocation] = useState('')
  const [experienceYears, setExperienceYears] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const fcmToken = await messaging().getToken()
      const res = await authService.login(email, password, fcmToken)

      const { accessToken: token, user } = res.data.data

      const data = {
        experienceYears: +experienceYears,
        hourlyRate: +hourlyRate,
        bio,
        location,
      }

      await authService.createLawyer(data, token)
      await AsyncStorage.setItem('token', token)
      dispatch(login({ token, user }))
    } catch (error) {
      console.log('Error: ', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollContainer>
      <Container>
        <Spacer h={24} />
        <P size={28} fw='medium'>أكمل معلوماتك لتتمكن من البدء بتقديم الاستشارات</P>
        <Spacer h={24} />
        <Input label='نبذة عنك' value={bio} onChange={setBio} />
        <Input label='العنوان' value={location} onChange={setLocation} />
        <Input label='سنين الخبرة' value={experienceYears} onChange={setExperienceYears} number />
        <Input label='سعر الساعة' value={hourlyRate} onChange={setHourlyRate} number />
        <Button title='التالي' loading={loading} onPress={handleSubmit} />
      </Container>
    </ScrollContainer>
  )
}

export default LawyerInfo