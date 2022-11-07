import * as React from "react";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { BaseColor } from "../config";

export const getNavigationOptions = (props) => {
  let navigationOptions = {};
  const { route, navigation, theme, drawerToggleRef } = props;
  switch (route.name) {
    case "HomeRootNavigator": {
      navigationOptions = {
        title: "Home",
        headerLeft: ({ color }) => (
          <Entypo
            name="menu"
            size={32}
            color={"white"}
            style={{ padding: 10 }}
          />
        ),
        headerRight: ({ color }) => (
          <FontAwesome5
            name="user-circle"
            size={25}
            color={"white"}
            style={{ padding: 10, marginRight: 10 }}
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
          <FontAwesome5
            name="user-circle"
            size={25}
            color={"white"}
            style={{ padding: 10, marginRight: 10 }}
          />
        ),
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        headerShown: false,
      };
      break;
    }

    case "Products": {
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
          <FontAwesome5
            name="user-circle"
            size={25}
            color={"white"}
            style={{ padding: 10, marginRight: 10 }}
          />
        ),
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        headerShown: false,
      };
      break;
    }

    case "Cart": {
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
          <AntDesign name="shoppingcart" size={24} color={color} />
        ),
        // tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        // headerShown: false,
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
