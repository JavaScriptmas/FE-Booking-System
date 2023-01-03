import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import { format } from "date-fns";
import { getTimeSlotsByDate } from "../api.js";
import { UserContext } from "../context/UserContext.js";
import customStyles from "../styles/customStyles.js";

const TimeSlots = ({ navigation, route }) => {
  const displayDate = route.params.appointment.substring(0, 10);
  const appointmentDate = route.params.appointment;

  const [date, setDate] = useState([]);
  const { user } = useContext(UserContext);

  const handelKeyPress = (timeSlot) => {
    if (timeSlot.available) {
      navigation.navigate("Payment", {
        timeSlot: timeSlot,
      });
    } else {
      Alert.alert(
        "Information",
        "Appointment Already Booked, please choose another time slot"
      );
    }
  };

  useEffect(() => {
    getTimeSlotsByDate(displayDate).then((results) => {
      setDate(results);
      return results;
    });
  }, [displayDate]);

  return (
    <SafeAreaView style={customStyles.container}>
      <View style={customStyles.usercontainer}>
        <Text style={customStyles.loggedinuser}>Welcome {user.firstName}</Text>
      </View>
      <Image
        style={customStyles.logo}
        source={require("../assets/Barber.png")}
      />
      <Text style={styles.dateText}>
        {format(new Date(appointmentDate), "EEEEEEEEE dd-MMM")}
      </Text>
      <ScrollView>
        <View style={customStyles.browsecontainer}>
          {date.map((timeSlot) => {
            return (
              <View key={timeSlot._id}>
                <Pressable
                  style={[
                    customStyles.id,
                    customStyles.timeSlotid,
                    {
                      backgroundColor:
                        timeSlot.available === 1 ? "#99c140" : "#cc3232",
                    },
                  ]}
                  onPress={() => handelKeyPress(timeSlot)}
                >
                  <Text style={[styles.dateText, { color: "black" }]}>
                    {timeSlot.time}
                  </Text>
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
  dateText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});

export default TimeSlots;
