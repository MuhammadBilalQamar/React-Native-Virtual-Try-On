import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

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
    height: 100,
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
    color: "#bb816e",
    fontWeight: "bold",
  },
});
export default styles;
