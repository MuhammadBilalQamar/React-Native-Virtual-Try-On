//COMPONENTS
import { SafeAreaView } from "react-native";
import React from "react";
import { GradientStyle, ThreeDTwo } from "@components";

//STYLES
import styles from "./avatar_styles";
const { parentContainer } = styles;

const ThreeDAvatar = ({ navigation }) => {
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

export default ThreeDAvatar;
