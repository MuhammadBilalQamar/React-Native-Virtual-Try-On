import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

// these are the styles for Cart screen GUI
const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    flex: 1,
  },
  container: {
    marginBottom: 120,
  },
  checkoutBtnContainer: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  checkoutBtn: {
    backgroundColor: "#f60000",
    width: "90%",
    height: 45,
    borderRadius: 10,
    marginHorizontal: 20,
    position: "absolute",
    bottom: 70,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  checkoutTextButton: {
    color: BaseColor.whiteColor,
    letterSpacing: 0.5,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default styles;
