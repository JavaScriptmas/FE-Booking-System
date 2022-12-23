import { createStackNavigator } from "@react-navigation/stack";
import Browse from './Browse';
import TimeSlots from './TimeSlots';


const Stack = createStackNavigator();

export default function BrowseStack({}) {
  return (
    <Stack.Navigator initalRoutName="Browse">
      <Stack.Screen name="BrowseScreen" component={Browse} options={{headerShown: false}} />
      <Stack.Screen name="TimeSlots" component={TimeSlots} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
