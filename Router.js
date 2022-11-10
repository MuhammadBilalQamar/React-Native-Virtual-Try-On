// REACT COMPONENTS
import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import MenuOverlay from "@navigation/customeDrawer";
// REACT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/index";

// REDUX ELEMENTS FOR LOCAL DATA STORAGE
import { useDispatch, useSelector } from "react-redux";

// APPLICATION ROUTER COMPONENT
const Router = () => {
  return (
    <MenuOverlay
      goToScreen={(item) => alert("goto screen")}
      isOpenMenu={true}
      // ref={drawerRef}
      routes={
        <View style={{ flex: 1 }}>
          <StatusBar animated />
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </View>
      }
    />
  );
};

export default Router;
