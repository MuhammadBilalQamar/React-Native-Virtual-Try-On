import { StyleSheet } from "react-native";

// these are the styles for Home screen GUI
const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    flex: 1,
  },
  cardContent: {
    paddingTop: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#ebf0f7",
  },
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    flex: 1,
    fontWeight: "bold",
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#6666ff",
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "#dcdcdc",
    fontSize: 12,
  },
});

export default styles;
