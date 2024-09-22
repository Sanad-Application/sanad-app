import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabs from './BottomTabs'

const Stack = createNativeStackNavigator()

const LawyerNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  )
}

export default LawyerNavigator