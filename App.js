import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Screens/Home.jsx';
import { UserProvider } from './context/UserContext';
import TimeSlots from './Screens/TimeSlots.jsx';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
      name="Home" 
      component={Home}
      options={{headerShown: false}}
      />
       <Stack.Screen
      name="TimeSlots" 
      component={TimeSlots}
      options={{headerShown: false}}
      />
      </Stack.Navigator>
      </NavigationContainer>
      </UserProvider>
  );
}


