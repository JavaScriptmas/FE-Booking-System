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
import { format, compareAsc } from 'date-fns'


const TimeSlots = () => {
    return <Text>test</Text>
}

export default TimeSlots;