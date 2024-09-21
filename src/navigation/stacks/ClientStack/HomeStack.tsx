import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "~screens/Client/Home"
import MakeRequest from "~screens/Client/RequestStack/MakeRequest"

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MakeRequest" component={MakeRequest} />
    </Stack.Navigator>
  )
}

export default HomeStack