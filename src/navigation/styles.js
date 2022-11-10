import { BaseColor } from "@config";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    // paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  avatarBackground: {
    flexDirection: "row",
    paddingTop: 40,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    backgroundColor: "#FFF",
    marginBottom: 20,
    flexWrap: "wrap",
    borderBottomWidth: 0.5,
  },
  avatar: {
    height: 80,
    width: "40%",
    resizeMode: "contain",
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 10,
  },
  fullName: {
    fontWeight: "bold",
    color: BaseColor.darkPrimaryColor,
    backgroundColor: "transparent",
    fontSize: 24,
    marginBottom: 6,
    textAlign: "left",
  },
  email: {
    backgroundColor: "transparent",
    fontSize: 14,
    textAlign: "left",
    color: "gray",
  },
  textItem: {
    color: "black",
    fontSize: 16,
  },
  textContainer: {
    marginLeft: 0,
    justifyContent: "center",
    flex: 1,
  },
});
