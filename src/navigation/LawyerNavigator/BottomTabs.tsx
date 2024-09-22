import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BottomTabBar } from "../components/BottomTabBar"
import Home from "~screens/Lawyer/Home"
import ChatList from "~screens/Shared/ChatList"
import Profile from "~screens/Shared/Profile"
import Requests from "~screens/Lawyer/Requests"

const Tab = createBottomTabNavigator()

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <BottomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Requests" component={Requests} />
    <Tab.Screen name="ChatList" component={ChatList} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
)

export default BottomTabs