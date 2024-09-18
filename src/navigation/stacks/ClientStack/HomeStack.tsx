import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationHeader } from "~navigation/components/NavigationHeader"
import Home from "~screens/Client/Home"

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <NavigationHeader /> }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStack