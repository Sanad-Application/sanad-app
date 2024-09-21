import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Profile from "~screens/Client/ProfileStack/Profile"

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStack