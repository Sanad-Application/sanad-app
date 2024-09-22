import AsyncStorage from '@react-native-async-storage/async-storage'
import { View } from 'react-native'
import { Button, Container, P, ScrollContainer, Spacer } from '~components'
import { useAppDispatch } from '~store/hooks'
import { logout } from '~store/slices/authSlice'
import { globalStyles } from '~theme'

const Profile = () => {
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token')
    dispatch(logout())
  }

  return (
    <ScrollContainer>
      <Container>
        <Spacer h={24} />
        <Button title='تسجيل الخروج' onPress={handleLogout} revert />
      </Container>
    </ScrollContainer>
  )
}

export default Profile