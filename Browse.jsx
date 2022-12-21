import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  View,
  Image,
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { Formik } from "formik";
import { postUser } from "./api.js";


const Browse = ({ navigation }) => {
    return <SafeAreaView><View><Text>Hello</Text></View></SafeAreaView>
}

export default Browse;