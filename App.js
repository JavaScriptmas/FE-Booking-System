import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Browse from "./Browse.jsx";
import TimeSlots from './TimeSlots.jsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: {
              backgroundColor: "black",
              paddingTop: 5,
            },
            tabBarActiveTintColor: "white",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="login"
                color={"white"}
                size={size}
              />
            ),
          }}
        />
         <Tab.Screen
          name="Browse"
          component={Browse}
          options={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: {
              backgroundColor: "black",
              paddingTop: 5,
            },
            tabBarActiveTintColor: "white",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="calendar-month"
                color={"white"}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: {
              backgroundColor: "black",
              paddingTop: 5,
            },
            tabBarActiveTintColor: "white",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="card-account-details"
                color={"white"}
                size={size}
              />
            ),
          }}
        />
             <Tab.Screen
          name="TimeSlots"
          component={TimeSlots}
          options={{
            headerShown: false,
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: {
              backgroundColor: "black",
              paddingTop: 5,
            },
            tabBarActiveTintColor: "white",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="calendar-month"
                color={"white"}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
