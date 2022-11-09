import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

// these are the styles for cart item component
const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    flex: 1,
  },
  cardContent: {
    marginLeft: 10,
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 110,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ebf0f7",
  },
  card: {
    width: "50%",
    padding: 10,
    flexDirection: "row",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  decription: {
    fontSize: 14,
    width: "50%",
    color: "gray",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: BaseColor.priceColor,
    fontWeight: "bold",
  },
  deleteBtn: {
    marginLeft: 70,
  },
  deleteBtnText: {
    marginTop: 10,
    fontSize: 22,
    color: BaseColor.darkPrimaryColor,
    fontWeight: "bold",
  },
  btnSize: {
    height: 25,
    width: 25,
    borderRadius: 15,
    marginLeft: 80,
    marginBottom: 5,
    borderColor: "#778899",
    borderWidth: 1,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
