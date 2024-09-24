import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './BottomTabs'
import ChatBot from '~screens/Shared/ChatBot'
import RequestDetails from '~screens/Client/RequestDetails'
import MakeRequest from '~screens/Client/MakeRequest'
import Chat from '~screens/Shared/Chat'

const Stack = createNativeStackNavigator()

const ClientNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="MakeRequest" component={MakeRequest} />
      <Stack.Screen name="RequestDetails" component={RequestDetails} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

export default ClientNavigator