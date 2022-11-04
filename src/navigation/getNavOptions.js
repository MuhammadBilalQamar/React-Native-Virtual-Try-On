import * as React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { BaseColor } from "../config";

export const getNavigationOptions = (props) => {
  let navigationOptions = {};
  const { route, navigation, theme, drawerToggleRef } = props;
  switch (route.name) {
    case "Home": {
      navigationOptions = {
        headerLeft: ({ color }) => (
          <Entypo
            name="menu"
            size={32}
            color={"white"}
            style={{ padding: 10 }}
          />
        ),
        headerRight: ({ color }) => (
          <AntDesign
            name="logout"
            size={22}
            color={"white"}
            style={{ padding: 10 }}
          />
        ),
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        // tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        // headerShown: false,
      };
      break;
    }

    case "Cart": {
      navigationOptions = {
        tabBarIcon: ({ color }) => (
          <AntDesign name="shoppingcart" size={24} color={color} />
        ),
        // tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        headerShown: false,
      };
      break;
    }

    case "Profile": {
      navigationOptions = {
        headerLeft: ({ color }) => (
          <Entypo
            name="menu"
            size={32}
            color={"white"}
            style={{ padding: 10 }}
          />
        ),
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user-o" size={24} color={color} />
        ),
        // tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        // headerShown: false,
      };
      break;
    }
    default: {
      navigationOptions = {
        tabBarShowLabel: false,
        headerTransparent: true,
        title: null,
      };
    }
  }
  navigationOptions.headerTitleStyle = {
    color: "white",
    fontSize: 24,
    // fontFamily: "Monorope",
  };
  // navigationOptions.headerTintColor = "white"
  navigationOptions.headerStyle = {
    backgroundColor: BaseColor.darkPrimaryColor,
  };

  return navigationOptions;
};
