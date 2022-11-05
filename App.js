import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation/index";
console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
