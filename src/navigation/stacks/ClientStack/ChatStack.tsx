import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ChatList from "~screens/Client/ChatStack/ChatList"

const Stack = createNativeStackNavigator()

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatList" component={ChatList} />
    </Stack.Navigator>
  )
}

export default ChatStack