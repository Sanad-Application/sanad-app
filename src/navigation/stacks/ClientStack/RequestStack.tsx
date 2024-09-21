import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MakeRequest from "~screens/Client/RequestStack/MakeRequest"
import RequestDetails from "~screens/Client/RequestStack/RequestDetails"
import Requests from "~screens/Client/RequestStack/Requests"

const Stack = createNativeStackNavigator()

const RequestStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="MakeRequest" component={MakeRequest} />
      <Stack.Screen name="RequestDetails" component={RequestDetails} />
    </Stack.Navigator>
  )
}

export default RequestStack