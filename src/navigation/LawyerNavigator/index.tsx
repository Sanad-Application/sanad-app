import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '~screens/Lawyer/Home'

const Stack = createNativeStackNavigator()

const LawyerNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default LawyerNavigator