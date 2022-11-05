import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  SplashScreen,
  Login,
  ForgotPassword,
  SignUp,
  Home,
  MyProfile,
  Cart,
} from "@screens";
import { getNavigationOptions } from "./getNavOptions";
import { GradientStyle } from "@components";

export default function Navigation(props) {
  return (
    <GradientStyle style={{ flex: 1, display: "flex" }}>
      <RootNavigator {...props} />
    </GradientStyle>
  );
}

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
        name="Home"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
         name="Root"
         component={BottomTabNavigator}
         options={{ headerShown: false }}
       /> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={(props) => {
          return getNavigationOptions({ ...props, theme: "light" });
        }}
        //  listeners={resetHomeStackOnTabPress}
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

// const HomeStack = createNativeStackNavigator();

// function HomeRootNavigator() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="Home"
//         component={Home}
//         //  options={(props) => {
//         //    return getNavigationOptions({ ...props, theme: 'light' });
//         //  }}
//       />
//     </HomeStack.Navigator>
//   );
// }

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
