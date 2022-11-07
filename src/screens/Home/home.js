//COMPONENTS
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { GradientStyle } from "@components";

//UTILITIES
import { BaseColor } from "@config";

//CONSTANTS
import { HOME_ITEMS } from "@constants/constants";

//STYLES
import styles from "./home_styles";
const { parentContainer } = styles;

//REDUX
import { useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const userData = useSelector((state) => state.user);

  const clickEventListener = (item) => {
    switch (item.name) {
      case "Store Products":
        navigation.navigate("Products");
        break;
      case "Upload Video":
        break;
      case "Shopping Cart":
        navigation.navigate("Cart");
        break;
      default:
        break;
    }
    // Alert.alert("Message", "Item clicked. " + item.name);
  };

  return (
    <>
      <GradientStyle style={parentContainer}>
        <SafeAreaView style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 20,
              marginVertical: 15,
              color: BaseColor.darkPrimaryColor,
            }}
          >
            Wellcome : {userData?.username || "Loading..."}
          </Text>
          <View style={styles.container}>
            <FlatList
              style={styles.contentList}
              data={HOME_ITEMS}
              keyExtractor={(item) => {
                return item.id;
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                      clickEventListener(item);
                    }}
                  >
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <View style={styles.cardContent}>
                      <Text style={styles.name}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default Home;
