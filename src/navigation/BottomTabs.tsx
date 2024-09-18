import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from './stacks/ClientStack/HomeStack'

const Tab = createBottomTabNavigator()

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="HomeStack" component={HomeStack} />
  </Tab.Navigator>
)

export default BottomTabs