// REACT BASIC IMPORT
import * as React from "react";

// REACT NATIVE COMPONENTS
import { TouchableOpacity } from "react-native";

// ICONS
import {
  Entypo,
  AntDesign,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

// UTILITY
import { BaseColor } from "@config";

// REDUX
import { useDispatch } from "react-redux";
import { openDrawer } from "@redux/reducers/drawer/action";

// REUSABLE FUNCTION THAT WILL SET THE HEADER BASED ON DIFFERENT SCREENS
export const getNavigationOptions = (props) => {
  let navigationOptions = {};
  const dispatch = useDispatch();
  const { route, navigation, theme, drawerToggleRef } = props;
  switch (route.name) {
    case "HomeRootNavigator": {
      navigationOptions = {
        title: "Home",
        headerLeft: ({ color }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(openDrawer(true));
            }}
          >
            <Entypo
              name="menu"
              size={32}
              color={"white"}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
        ),
        // headerRight: ({ color }) => (
        //   <FontAwesome5
        //     name="user-circle"
        //     size={25}
        //     color={"white"}
        //     style={{ padding: 10, marginRight: 10 }}
        //   />
        // ),
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        // tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        headerShown: false,
      };
      break;
    }

    case "Home": {
      navigationOptions = {
        headerLeft: ({ color }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(openDrawer(true));
            }}
          >
            <Entypo
              name="menu"
              size={32}
              color={"white"}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
        ),
        // headerRight: ({ color }) => (
        //   <FontAwesome5
        //     name="user-circle"
        //     size={25}
        //     color={"white"}
        //     style={{ padding: 10, marginRight: 10 }}
        //   />
        // ),
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        // headerShown: false,
      };
      break;
    }

    case "Products": {
      navigationOptions = {
        title: "Products",
        headerLeft: ({ color }) => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-return-up-back"
              size={32}
              color={"white"}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
        ),
        // headerRight: ({ color }) => (
        //   <FontAwesome5
        //     name="user-circle"
        //     size={25}
        //     color={"white"}
        //     style={{ padding: 10, marginRight: 10 }}
        //   />
        // ),
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        // headerShown: false,
      };
      break;
    }

    case "ProductDetails": {
      navigationOptions = {
        title: "Details",
        headerLeft: ({ color }) => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-return-up-back"
              size={32}
              color={"white"}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
        ),
        // headerRight: ({ color }) => (
        //   <FontAwesome5
        //     name="user-circle"
        //     size={25}
        //     color={"white"}
        //     style={{ padding: 10, marginRight: 10 }}
        //   />
        // ),
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        // headerShown: false,
      };
      break;
    }

    case "ThreeDAvatar": {
      navigationOptions = {
        title: "3D Avatar",
        headerLeft: ({ color }) => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-return-up-back"
              size={32}
              color={"white"}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
        ),
        // headerRight: ({ color }) => (
        //   <FontAwesome5
        //     name="user-circle"
        //     size={25}
        //     color={"white"}
        //     style={{ padding: 10, marginRight: 10 }}
        //   />
        // ),
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" size={24} color={color} />
        ),
        tabBarShowLabel: false,
        tabBarOptions: {
          showLabel: true,
        },
        // headerShown: false,
      };
      break;
    }

    case "Cart": {
      navigationOptions = {
        headerLeft: ({ color }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(openDrawer(true));
            }}
          >
            <Entypo
              name="menu"
              size={32}
              color={"white"}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => {
              dispatch(openDrawer(true));
            }}
          >
            <Entypo
              name="menu"
              size={32}
              color={"white"}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
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
