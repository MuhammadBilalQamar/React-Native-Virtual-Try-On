// REACT COMPONENTS
import React from "react";
import { View, StatusBar } from "react-native";
import MenuOverlay from "@navigation/customeDrawer";
// REACT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "@navigation";
import Navigation from "@navigation";

// APPLICATION ROUTER COMPONENT
const Router = () => {
  return (
    <MenuOverlay
      goToScreen={(item) => alert("goto screen")}
      isOpenMenu={true}
      routes={
        <View style={{ flex: 1 }}>
          <StatusBar animated />
          <NavigationContainer ref={navigationRef}>
            <Navigation />
          </NavigationContainer>
        </View>
      }
    />
  );
};

export default Router;
