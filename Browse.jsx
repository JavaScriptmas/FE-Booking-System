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
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { postUser } from "./api.js";

const Browse = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require("./assets/Barber.png")} />
      <View>
        <View style={styles.browsecontainer}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: '100%'
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  browsecontainer: {
    width:300,
    height:440,
    backgroundColor: 'black',
  }
});

export default Browse;
