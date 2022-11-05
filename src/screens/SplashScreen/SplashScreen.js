import { Image, TouchableWithoutFeedback, Text } from "react-native";
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { GradientStyle } from "@components";
import { Images } from "@config";
import { getLocalData } from "@utils";
import styles from "./styles";

const SplashScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePress = () => {
    navigation.navigate("SplashScreenSecond");
  };

  useEffect(() => {
    getLocalData("loggedInUseruid").then((token) => {
      if (token) {
        setTimeout(() => {
          setIsLoggedIn(true);
          navigation.navigate("Home");
        }, 1500);
      } else {
        setTimeout(() => {
          navigation.navigate("Login");
        }, 150);
      }
    });
  }, [navigation]);

  if (isLoggedIn) {
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <GradientStyle style={styles.mainContainer}>
        <Image source={Images.logo} style={styles.devicesStyle} />
        <Text style={styles.text}>Virtual Clothing</Text>
        {/* {isLoggedIn && <CacheMessageWrapper />} */}
      </GradientStyle>
    </TouchableWithoutFeedback>
  );
};

export default SplashScreen;
