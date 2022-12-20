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
import Register from "./Register";
import { Formik } from "formik";
const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Image style={styles.logo} source={require("./assets/Barber.png")} />
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="username..."
                maxLength={10}
                placeholderTextColor={"white"}
              />
              <TextInput
                style={styles.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                placeholder="password..."
                maxLength={10}
              />
              <Pressable
                onPress={handleSubmit}
                style={styles.login}
                textAlign={"center"}
              >
                <Text
                  onPress={handleSubmit}
                  type="submit"
                  style={styles.loginText}
                  title="Login"
                >
                  Login
                </Text>
              </Pressable>
              <Pressable style={styles.forgottenLink}>
                <Text style={styles.forgottenText}>Forgot Password?</Text>
              </Pressable>
              <Pressable style={styles.registerLink}>
                <Text style={styles.registerText}>
                  Not Registered? Press Here
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  username: {
    padding: 5,
    height: 50,
    width: 240,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 15,
    borderColor: "white",
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  password: {
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 15,
    borderColor: "white",
    textAlign: "center",
    color: "white",
    width: 240,
    fontSize: 20,
  },
  forgottenLink: {
    alignItems: "center",
    marginBottom: 10,
  },

  forgottenText: {
    color: "white",
    fontSize: 14,
  },
  login: {
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 15,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    backgroundColor: "white",
  },
  loginText: {
    fontSize: 20,
  },
  registerLink: {
    bottom: -130,
    alignItems: "center",
    justifyContent: "center",
  },

  registerText: {
    color: "white",
    fontSize: 16,
    justifyContent: "center",
  },
});
export default Login;
