import React, { useState, useEffect } from "react";
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
} from "react-native"
import { Formik } from "formik";
import { postUser } from "./api.js";
import { format, compareAsc } from 'date-fns';
import { TimeSlots } from './TimeSlots';

const Browse = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments().then((results) => {
      setAppointments(results);
      return results;
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/Barber.png")} />
        <ScrollView>
      <View style={styles.browsecontainer}>
          {appointments.map((appointment => {
            return (
              <View>
                <Pressable style={styles.id} onPress={() => navigation.navigate("TimeSlots")}>
              <Text>{format(new Date(appointment._id), 'MM/dd/yyyy')}</Text>
              <Text>{appointment.count}</Text>
                </Pressable>
              </View>
            );
          })
          )}
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
    flexWrap: 'wrap',
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: "center",
  },
  id: {
    color: "black",
    textAlign: "center",
    height: 100,
    width: 100,
    backgroundColor: 'green',
    margin: 10,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: "center",
  },
});

export default Browse;
