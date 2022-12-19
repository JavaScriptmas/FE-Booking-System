import React from "react";
import {
  View,
  Image,
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import { Formik } from "formik";
const Login = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Image style={styles.logo} source={require("./assets/Barbers.jpg")} /> */}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                style={styles.username}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="enter email here"
              />
              <TextInput
                style={styles.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <Pressable style={styles.login}>
              <Button
                onPress={handleSubmit}
                title="Submit"
              />
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
  },
  username: {
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
  },
  password: {
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
  },
  login: {
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
  },
});
export default Login;