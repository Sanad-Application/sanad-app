import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationHeader } from "~navigation/components/NavigationHeader"
import ChatList from "~screens/Client/ChatStack/ChatList"

const Stack = createNativeStackNavigator()

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <NavigationHeader /> }}>
      <Stack.Screen name="ChatList" component={ChatList} />
    </Stack.Navigator>
  )
}

export default ChatStack