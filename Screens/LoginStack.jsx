import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator initalRoutName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
    </Stack.Navigator>
  );
}
