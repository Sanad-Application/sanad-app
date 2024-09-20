import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from './stacks/ClientStack/HomeStack'
import ProfileStack from "./stacks/ClientStack/ProfileStack"
import ChatStack from "./stacks/ClientStack/ChatStack"
import RequestStack from "./stacks/ClientStack/RequestStack"
import { BottomTabBar } from "./components/BottomTabBar"

const Tab = createBottomTabNavigator()

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />}>
    <Tab.Screen name="HomeStack" component={HomeStack} />
    <Tab.Screen name="RequestStack" component={RequestStack} />
    <Tab.Screen name="ChatStack" component={ChatStack} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
)

export default BottomTabs