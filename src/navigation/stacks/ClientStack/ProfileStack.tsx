import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationHeader } from "~navigation/components/NavigationHeader"
import Profile from "~screens/Client/ProfileStack/Profile"

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <NavigationHeader /> }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStack