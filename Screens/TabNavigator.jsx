import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginStack from "./LoginStack";
import RegisterStack from "./RegisterStack";
import BrowseStack from "./BrowseStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.js";



const Tab = createBottomTabNavigator();

export default function TabNavigator() {

  const { user } = useContext(UserContext);
  console.log(user)



    return (
        <Tab.Navigator>

        <Tab.Screen
          name={user.username ? 'Logout' : 'Login'}          
          // name="Login"
          component={LoginStack}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
            tabBarLabelStyle: { fontSize: 14 },
            tabBarStyle: {
              backgroundColor: "black",
              paddingTop: 5,
              tabBarIconStyle: { display: "none" },
            },
            tabBarActiveTintColor: "white",
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                // name="login"
                name={user.username ? 'logout' : 'login'} 
                color={"white"}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Browse"
          component={BrowseStack}
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
          component={RegisterStack}
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
      </Tab.Navigator>
      );
    }