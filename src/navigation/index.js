// REACT BASIC IMPORT
import * as React from "react";

// NAVIGATION IMPORTS FROM REACT NAVIGATION PACKAGE
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// CUSTOM CREATED SCREENS IMPORTING
import {
  SplashScreen,
  Login,
  ForgotPassword,
  SignUp,
  Home,
  MyProfile,
  Cart,
  Products,
  ProductDetails,
  ThreeDAvatar,
} from "@screens";

// NAVIAGATION REUSABLE UTILITY FUNCTION
import { getNavigationOptions } from "./getNavOptions";

// CUSTOM COMPONENT FOR GRADIENT BACKGROUND
import { GradientStyle } from "@components";

// ROOT NAVIGATOR RENDERING PART
export default function Navigation(props) {
  return (
    <GradientStyle style={{ flex: 1, display: "flex" }}>
      <RootNavigator {...props} />
    </GradientStyle>
  );
}

// ROOT STACK NAVIGATOR WITH FIVE MAJOR CHILD SCREENS (SPLASH_SCREEN, LOGIN, SIGNUP, FORGOT_PASSWORD, DASHBOARD)
const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          title: "Login",
          headerShown: false,
          tabBarStyle: { display: "none" },
        })}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InitailDashboard"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// BOTTOM TAB NAVIGATOR WITH THREE CHILD SCREENS (HOME, CART, PROFILE)
const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeRootNavigator"
      screenOptions={{
        // tabBarActiveTintColor: BaseColor.darkPrimaryColor,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeRootNavigator"
        component={HomeRootNavigator}
        options={(props) => {
          return getNavigationOptions({ ...props, theme: "light" });
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={(props) => {
          return getNavigationOptions({ ...props, theme: "light" });
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={MyProfile}
        options={(props) => {
          return getNavigationOptions({ ...props, theme: "light" });
        }}
      />
    </BottomTab.Navigator>
  );
}

// HOME STACK NAVIGATOR WITH THREE CHILD SCREENS (PRODUCTS, PRODUCT_DETAILS, 3DAVATAR)
const HomeStack = createNativeStackNavigator();
function HomeRootNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={(props) => {
          return getNavigationOptions({ ...props, theme: "light" });
        }}
      />
      <HomeStack.Screen
        name="Products"
        component={Products}
        options={(props) => {
          return getNavigationOptions({ ...props, theme: "light" });
        }}
      />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={(props) => {
          return getNavigationOptions({ ...props, theme: "light" });
        }}
      />
      <HomeStack.Screen
        name="ThreeDAvatar"
        component={ThreeDAvatar}
        options={(props) => {
          return getNavigationOptions({ ...props, theme: "light" });
        }}
      />
    </HomeStack.Navigator>
  );
}

// NAVIAGATION REFRENCE FOR NAVIGATING DIFFERENT SCREENS
export const navigationRef = React.createRef();
export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
