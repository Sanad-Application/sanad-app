import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BottomTabBar } from "../components/BottomTabBar"
import Home from "~screens/Client/Home"
import Requests from "~screens/Client/Requests"
import ChatList from "~screens/Client/ChatList"
import Profile from "~screens/Client/Profile"

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