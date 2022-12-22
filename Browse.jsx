import React, { useState, useEffect, useContext } from "react";
import { getAllAppointments } from "./api.js";
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
import { format, compareAsc } from "date-fns";
import { TimeSlots } from "./TimeSlots";
import { UserContext } from "./context/UserContext.js";

const Browse = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    getAllAppointments().then((results) => {
      setAppointments(results);
      return results;
    });
  }, []);

  const getBackgroundColour = (available) => {
    let color;
    if ((available === 0)) {
      color = "#ffa080";
    } else if (available < 8)
    {
      color = "#ffc080";
      // color = "#ffdf80";
    } else {
      color = "#a5d46a"
    }
    return color;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.usercontainer}>
        <Text style={styles.test}>{user.username}</Text>
      </View>
      <Image style={styles.logo} source={require("./assets/Barber.png")} />
      <ScrollView>
        <View style={styles.browsecontainer}>
          {appointments.map((appointment) => {
            return (
              <View key={appointment._id}>
                <Pressable
                  style={[styles.id, {backgroundColor: getBackgroundColour(appointment.count)}]}
                  onPress={() =>
                    navigation.navigate("TimeSlots", {
                      appointment: appointment._id,
                    })
                  }
                >
                  {/* <Text>{format(new Date(appointment._id), "MM/dd/yyyy")}</Text> */}
                  <Text style={styles.dateText}>{format(new Date(appointment._id), "E")}</Text>
                  <Text style={styles.dateText}>{format(new Date(appointment._id), "dd-MMM")}</Text>
                  <Text>{appointment.count} available</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  browsecontainer: {
    width: "100%",
    height: 440,
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  id: {
    color: "black",
    textAlign: "center",
    height: 100,
    width: 100,
    backgroundColor: "green",
    margin: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  usercontainer: {
    width: "100%",
    flex: 1,
  },
  test: {
    textAlign: "right",
    color: "white",
    fontSize: 20,
    marginRight: 30,
  },
  dateText: {
    fontSize:22,
    fontWeight: "bold",
  }
});

export default Browse;
