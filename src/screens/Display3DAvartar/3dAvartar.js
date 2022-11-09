//COMPONENTS
import { SafeAreaView } from "react-native";
import React from "react";
import { GradientStyle, ThreeDTwo } from "@components";

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
        <SafeAreaView style={{ flex: 1 }}>
          <ThreeDTwo />
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default ThreeDAvartar;
