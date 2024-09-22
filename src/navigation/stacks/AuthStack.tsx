import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LawyerInfo from '~screens/Lawyer/LawyerInfo'
import ChooseUserType from '~screens/Shared/ChooseUserType'
import ForgetPassword from '~screens/Shared/ForgetPassword'
import Login from '~screens/Shared/Login'
import Register from '~screens/Shared/Register'
import VerifyEmail from '~screens/Shared/VerifyEmail'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChooseUserType" component={ChooseUserType} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="LawyerInfo" component={LawyerInfo} />
    </Stack.Navigator>
  )
}

export default AuthStack   