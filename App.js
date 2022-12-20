import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, tabBarStyle: {display: "none"}, tabBarIconStyle: {color:"red"}}}
          />
          <Tab.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false,  tabBarStyle: {backgroundColor:"black", height: 80, borderColor: "red"}, tabBarActiveTintColor: {color:"white"}}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

