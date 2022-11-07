import { Image, TouchableWithoutFeedback, Text } from "react-native";
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import { GradientStyle } from "@components";
import { Images } from "@config";
import { getLocalData } from "@utils";
import styles from "./styles";
import { useSelector } from "react-redux";

const SplashScreen = ({ navigation }) => {
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (userData?.userId) {
      navigation.navigate("InitailDashboard");
    } else {
      navigation.navigate("Login");
    }
  }, [navigation]);

  return (
    <TouchableWithoutFeedback>
      <GradientStyle style={styles.mainContainer}>
        <Image source={Images.logo} style={styles.devicesStyle} />
        <Text style={styles.text}>Virtual Clothing</Text>
        {/* {isLoggedIn && <CacheMessageWrapper />} */}
      </GradientStyle>
    </TouchableWithoutFeedback>
  );
};

export default SplashScreen;
