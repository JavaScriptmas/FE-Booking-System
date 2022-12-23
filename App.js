import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home.jsx";
import { UserProvider } from "./context/UserContext";
import TimeSlots from "./Screens/TimeSlots.jsx";
import TabNavigator from "./Screens/TabNavigator.jsx";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </UserProvider>
  );
}
