import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './BottomTabs'
import Chat from '~screens/Shared/Chat'

const Stack = createNativeStackNavigator()

const LawyerNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

export default LawyerNavigator