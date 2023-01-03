import React, { useState, useEffect, useContext } from "react";
import {getAppointmentByUsername} from "../api.js"
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
    ActivityIndicator,
  } from "react-native";
  import { UserContext } from "../context/UserContext.js";
  import customStyles from "../styles/customStyles.js";
  import { format } from "date-fns";
  import { AppointmentContext } from "../context/AppointmentBooked.js";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const { appointmentBooked } = useContext(AppointmentContext);
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserContext);


    useEffect(() => {
        setLoading(true);
        getAppointmentByUsername(user.username).then((results) => {
          // console.log(results)
          setAppointments(results);
    
          setLoading(false);
          return results;
        });
      }, [appointmentBooked]);

      // console.log(appointments)
    return (
<SafeAreaView style={customStyles.container}>
    <View style={customStyles.usercontainer}>
        <Text style={customStyles.loggedinuser}>Welcome {user.firstName}</Text>
      </View>
      <Image
        style={customStyles.logo}
        source={require("../assets/Barber.png")}
      />

<ActivityIndicator animating={loading} size="large" color="#fff" />
      <ScrollView>
        <Text style={customStyles.appointmentHeader}>Future Appointments</Text>
        <View style={customStyles.browsecontainer}>
          {appointments.map((appointment) => {
            let currentDate = new Date()
            currentDate.setHours(0,0,0,0)
            let apptDate = new Date(appointment.date)
            if (apptDate >= currentDate) {
              return (
                <View key={appointment._id}>
                <Text style={customStyles.textStyle}>
                  
                    {appointment.time + ' on '}  
                    {format(new Date(appointment.date), "EEEEEEEEE dd-MMM")}
              
                  </Text>
              </View>
            )
          }
          })}
        </View>
        <Text style={customStyles.appointmentHeader}>Past Appointments</Text>
        <View style={customStyles.browsecontainer}>
          {appointments.map((appointment) => {
            let currentDate = new Date()
            currentDate.setHours(0,0,0,0)
            let apptDate = new Date(appointment.date)
            if (apptDate < currentDate) {
              return (
                <View key={appointment._id}>
                <Text style={customStyles.textStyle}>
                  
                    {appointment.time + ' on '}  
                    {format(new Date(appointment.date), "EEEEEEEEE dd-MMM")}
                    {/* {appointment.date} */}
                    {/* {appointment.date.substring(0,10)} */}
                    {/* {displayDate} */}
                  </Text>
              </View>
            )
          }
          })}
        </View>
      </ScrollView>


</SafeAreaView>
    )

}

export default Appointments