import { Image, TouchableWithoutFeedback, Text } from "react-native";
/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import { GradientStyle } from "@components";
import { Images } from "@config";
import styles from "./styles";
import { useSelector } from "react-redux";

const SplashScreen = ({ navigation }) => {
  const userData = useSelector((state) => state.user);

  // Here we are checking if the user id is present in the  storage then we are moving user to dashboard screen otherwise login screen
  useEffect(() => {
    if (userData?.userId) {
      navigation.navigate("InitailDashboard");
    } else {
      navigation.navigate("Login");
    }
  }, [navigation]);

  // this is the splash screen GUI code
  return (
    <TouchableWithoutFeedback>
      <GradientStyle style={styles.mainContainer}>
        <Image source={Images.logo} style={styles.devicesStyle} />
        <Text style={styles.text}>Virtual Clothing</Text>
      </GradientStyle>
    </TouchableWithoutFeedback>
  );
};

export default SplashScreen;
