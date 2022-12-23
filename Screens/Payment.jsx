import { Button, Alert, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useStripe } from "@stripe/stripe-react-native";
// const stripe = Stripe(
//   "pk_test_51MFG9yHkGLOZR9cAMUkjeMdlKTPjXKTYoXXmtJB30nZrf8nh3JY92vrZTWiw8aXjTpqL7XYgJagRRRq1DHLM9JIm00t30d7PR4"
// );

const Payment = ({ navigation, route }) => {
  const stripePay = useStripe();
  const timeSlot = route.params.timeSlot;
  const timeSlotDate = route.params.date;

  const subscribe = async () => {
    try {
      const response = await fetch(
        "https://javascriptmas.cyclic.app/api/payment",
        {
          method: "POST",
          body: JSON.stringify({ name: "nasser" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("response from stripe", data);
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;

      const initSheet = await stripePay.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripePay.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert("Payment Successful, thank you");
    } catch (error) {
      console.log(error);
      Alert.alert("something is wrong, please try later");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>
        {`You are booking an appointment at ${timeSlot} on ${timeSlotDate} for a haircut
        please pay the deposit to confirm the booking`}
      </Text>
      <Button title="Pay £10 Deposit" onPress={subscribe} />
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
  textStyle: {
    color: "white",
  },
});

export default Payment;
