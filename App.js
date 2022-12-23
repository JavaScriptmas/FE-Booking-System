import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./context/UserContext";
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
