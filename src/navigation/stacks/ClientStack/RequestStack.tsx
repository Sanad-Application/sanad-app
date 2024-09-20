import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationHeader } from "~navigation/components/NavigationHeader"
import ChooseCategory from "~screens/Client/RequestStack/ChooseCategory"
import ChooseService from "~screens/Client/RequestStack/ChooseService"
import Requests from "~screens/Client/RequestStack/Requests"

const Stack = createNativeStackNavigator()

const RequestStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <NavigationHeader /> }}>
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="ChooseService" component={ChooseService} />
      <Stack.Screen name="ChooseCategory" component={ChooseCategory} />
    </Stack.Navigator>
  )
}

export default RequestStack