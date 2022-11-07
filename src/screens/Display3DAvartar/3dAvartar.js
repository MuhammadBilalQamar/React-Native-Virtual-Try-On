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
import styles from "./avartar_styles";
const { parentContainer } = styles;

// REDUX ELEMENTS FOR LOCAL DATA STORAGE
import { useSelector } from "react-redux";

const ThreeDAvartar = ({ navigation }) => {
  const userData = useSelector((state) => state.user);

  return (
    <>
      <GradientStyle style={parentContainer}>
        <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default ThreeDAvartar;
