import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationHeader } from "~navigation/components/NavigationHeader"
import ChooseCategory from "~screens/Client/RequestStack/ChooseCategory"
import ChooseService from "~screens/Client/RequestStack/ChooseService"

const Stack = createNativeStackNavigator()

const RequestStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <NavigationHeader /> }}>
      <Stack.Screen name="ChooseService" component={ChooseService} />
      <Stack.Screen name="ChooseCategory" component={ChooseCategory} />
    </Stack.Navigator>
  )
}

export default RequestStack