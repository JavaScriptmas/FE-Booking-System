import React, { useState, useEffect } from "react";
import { getAllAppointments } from "../api.js";
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
import { postUser } from "../api.js";
import { format, compareAsc } from "date-fns";
import { getTimeSlotsByDate } from "../api.js";

const TimeSlots = ({ navigation, route }) => {
  const displayDate = route.params.appointment.substring(0, 10);
  const appointmentID = route.params.appointment

  const [date, setDate] = useState([]);
  useEffect(() => {
    getTimeSlotsByDate(displayDate).then((results) => {
      setDate(results);
      return results;
    });
  }, [displayDate]);
  // console.log(date)
  const getBackgroundColour = (available) => {
    let color;
    if ((available === 1)) {
      color = "#99c140"
    } else {
      color = "#cc3232";
    }
    return color;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Barber.png")} />
      <Text style={styles.dateText}>{format(new Date(appointmentID), "EEEEEEEEE dd-MMM")}</Text>
      <ScrollView>
        <View style={styles.browsecontainer}>
          {date.map((timeSlot) => {
            return (
              <View key={timeSlot._id}>
                <Pressable
                  style={[
                    styles.id,
                    {
                      backgroundColor: getBackgroundColour(timeSlot.available),
                    },
                  ]}
                  onPress={() =>
                    navigation.navigate("Payment", {
                      timeSlot: timeSlot.time,
                      date: displayDate,
                    })
                  }
                >
                  <Text>{timeSlot.time}</Text>
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
    width: 125,
    height: 100,
    marginBottom: 20,
  },
  browsecontainer: {
    marginTop: 20,
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  id: {
    textAlign: "center",
    height: 65,
    width: 300,
    margin: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  dateText: {
    fontSize:22,
    fontWeight: "bold",
    color: "white"
  },

});

export default TimeSlots;
