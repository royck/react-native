import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainwrapper: {
    flex: 1,
    width: "100%",
  },
  headercontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "maroon",
    borderRadius: 10,
    display: "flex",
    alignItems: "flex-start",
    marginTop: "10%",
  },
  btn: {
    borderRadius: 5,
    padding: 10,
  },
  btntxt: {
    color: "white",
    fontWeight: "bold",
  },
  listcontiner: {
    padding: 10,
    width: "100%",
    // backgroundColor: "yellow",
  },
  list: {
    margin: 5,
    width: "98%",
    backgroundColor: "#f0f0f0",
    padding:"5%",
    borderRadius:5,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  tskname: {
    fontWeight: "bold",
    color: "black",
  },
  popupWrapper: {
    paddingTop: 50,
    width: "100%",
    height: "100%",
    marginTop: "10%",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
  },
  popup: {
    width: "95%",
    height: "35%",
    backgroundColor: "#ffff",
  },
  input: {
    height: 100,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
  },
});
