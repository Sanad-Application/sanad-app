import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ChooseUserType from '~screens/Shared/ChooseUserType'
import ForgetPassword from '~screens/Shared/ForgetPassword'
import Login from '~screens/Shared/Login'
import Register from '~screens/Shared/Register'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChooseUserType" component={ChooseUserType}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
    </Stack.Navigator>
  );
};

export default AuthStack;   