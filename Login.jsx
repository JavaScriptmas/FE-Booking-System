import React from "react";
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
const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Image style={styles.logo} source={require("./assets/Barber.png")} />
        <Formik
          initialValues={{ email: "", password: "" }}
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
              {/* <Pressable>
                <Text style={styles.forgotten} color={"white"} title="Fjnefjnfej?" />
              </Pressable> */}
              <Pressable style={styles.login} textAlign={"center"}>
                <Button color={"black"} onPress={handleSubmit} title="Login" />
              </Pressable>
              <Pressable>
                <Button color={"white"} title="Not Registered? Press Here"></Button>
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
  forgotten: {
    color:"white",
    backgroundColor:'red'
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
    fontSize: 20,
    backgroundColor: "white",
  },
  registerLink: {
    margin: 10,
  },
});
export default Login;
