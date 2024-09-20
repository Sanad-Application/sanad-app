import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationHeader } from "~navigation/components/NavigationHeader"
import MakeRequest from "~screens/Client/RequestStack/MakeRequest"
import Requests from "~screens/Client/RequestStack/Requests"

const Stack = createNativeStackNavigator()

const RequestStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <NavigationHeader /> }}>
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="MakeRequest" component={MakeRequest} />
    </Stack.Navigator>
  )
}

export default RequestStack