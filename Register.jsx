import React from "react";
import { Link } from '@react-navigation/native';
import {
  View,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { Formik } from "formik";

const Register = () => {
  return (
    <SafeAreaView>
      <View>
        <Image style={styles.logo} source={require("./assets/Barber.png")} />

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                placeholder="First Name..."
                maxLength={20}
                placeholderTextColor={"white"}
              />
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                placeholder="Last Name..."
                maxLength={20}
                placeholderTextColor={"white"}
              />
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username..."
                maxLength={20}
                placeholderTextColor={"white"}
              />
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email..."
                maxLength={254}
                placeholderTextColor={"white"}
              />
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Phone Number..."
                maxLength={15}
                placeholderTextColor={"white"}
              />
              <TextInput
                style={styles.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                placeholder="Password"
                maxLength={12}
              />
              <TextInput
                style={styles.password}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                placeholder="Confirm Password"
                maxLength={12}
              />
              <Pressable
                onPress={handleSubmit}
                style={styles.register}
                textAlign={"center"}
              >
                <Text
                  onPress={handleSubmit}
                  type="submit"
                  style={styles.registerText}
                  title="Register"
                >
                  Register
                </Text>
              </Pressable>
              <Pressable style={styles.loginLink}>
                <Text style={styles.loginText}>
                  Already Registered?
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
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
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  register: {
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
  registerText: {
    fontSize: 20,
  },
  loginLink: {
    alignItems: "center",
    justifyContent: "center",
  },

  loginText: {
    color: "white",
    fontSize: 16,
    alignItems: 'center',
    justifyContent: "center",
  },
});
