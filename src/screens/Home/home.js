import {
  Text,
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
  AsyncStorage,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { GradientStyle } from "@components";
import { BaseColor, Images } from "../../config";
import styles from "./home_styles";

//ICONS
import { AntDesign } from "@expo/vector-icons";

const { parentContainer } = styles;

const Home = ({ navigation }) => {
  const [passwordVisible, showpasswordVisible] = useState(false);

  useEffect(() => {}, []);

  const handleLogout = () => {
    Alert.alert("Are you sure?", "do you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => removeLocalUser(),
        style: "cancel",
      },
    ]);
  };

  const removeLocalUser = async () => {
    try {
      AsyncStorage.getAllKeys()
        .then((keys) => AsyncStorage.multiRemove(keys))
        .then(() => {
          navigation.navigate("Login");
        })
        .catch((err) => {
          console.log("error----", err);
        });
    } catch (error) {
      console.log("error----", error);
      alert("something went wrong");
    }
  };

  return (
    <>
      <GradientStyle style={parentContainer}>
        <SafeAreaView style={{ flex: 1, marginTop: hp(5) }}>
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default Home;
