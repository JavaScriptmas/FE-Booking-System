import { StyleSheet } from "react-native";

const customStyles = StyleSheet.create({
  browsecontainer: {
    width: "100%",
    height: "50%",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
  },
  id: {
    textAlign: "center",
    height: 100,
    width: 100,
    margin: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "black",
  },
  timeSlotid: {
    height: 80,
    width: 150,
  },
  logo: {
    width: 125,
    height: 100,
    marginBottom: 10,
    // backgroundColor: "red",
  },
  usercontainer: {
    // backgroundColor: "red",
    height: 50,
    width: "100%",
    // flex: 1,
  },
  loggedinuser: {
    // backgroundColor: "red",
    height: 50,
    textAlign: "center",
    color: "white",
    fontSize: 25,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    // marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    padding: 10,
    fontSize: 18,
  },
  appointmentHeader: {
    color: "white",
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    padding: 10,
    fontSize: 28,
    // backgroundColor: "red",
  },
});

export default customStyles;
