import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    flex: 1,
  },
  container: {
    // flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 300,
    height: 250,
    borderRadius: 10,
  },
  name: {
    fontSize: 28,
    letterSpacing: 0.7,
    color: "#696969",
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: BaseColor.priceColor,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    color: "#696969",
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 15,
    borderColor: "#778899",
    borderWidth: 1,
    marginHorizontal: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  starContainer: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentColors: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  contentSize: {
    justifyContent: "center",
    marginHorizontal: 30,
    flexDirection: "row",
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: "gray",
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 30,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: BaseColor.darkPrimaryColor,
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
export default styles;
