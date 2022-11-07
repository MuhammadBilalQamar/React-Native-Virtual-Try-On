//COMPONENTS
import {
  Text,
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GradientStyle } from "@components";

//FIREBASE REQUESTS
import { FirebaseRequests, writeUserData } from "@services";

//ICONS
import { AntDesign } from "@expo/vector-icons";

//UTILITIES
import { getLocalData } from "@utils";
import { BaseColor, Images } from "@config";

//CONSTANTS
import { HOME_ITEMS } from "../../constants/constants";

//STYLES
import styles from "./home_styles";
const { parentContainer } = styles;

const Home = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const unsubscribe = navigation.addListener("focus", async () => {
        setIsLoading(true);
        const uid = await getLocalData("loggedInUseruid");
        const user = await FirebaseRequests.readUserData(uid);
        if (user) {
          setUser(user);
        }
        setIsLoading(false);
      });
      return unsubscribe;
    } catch (error) {
      console.log("error <==>", error);
      setIsLoading(false);
    }
  }, [navigation]);

  const clickEventListener = (item) => {
    switch (item.name) {
      case "Store Products":
        break;

      case "Upload Video":
        break;

      case "Shopping Cart":
        navigation.navigate("Cart", {
          user: user,
        });
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
            Wellcome : {user?.username || "Loading..."}
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
