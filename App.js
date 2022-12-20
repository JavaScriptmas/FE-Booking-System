import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import Login from "./Login.jsx";
import Register from "./Register.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
