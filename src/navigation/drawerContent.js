// REACT COMPONENTS
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import { GradientStyle } from "@components";

//STYLES
import styles from "./styles";

//UTILITIES
import { BaseColor } from "@config";

//ICONS
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "@redux/reducers/drawer/action";

// NAVIGATION
import { navigationRef } from "@navigation";

const items = [
  {
    id: 1,
    text: "Home",
    Icon: (color) => <Ionicons name="home-outline" size={22} color={color} />,
  },
  {
    id: 2,
    text: "Cart",
    Icon: (color) => <Ionicons name="cart-outline" size={22} color={color} />,
  },
  {
    id: 3,
    text: "Profile",
    Icon: (color) => <Feather name="user" size={22} color={color} />,
  },
  {
    id: 4,
    text: "Contact",
    Icon: (color) => <AntDesign name="contacts" size={22} color="black" />,
  },
];

const MenuItem = (props) => {
  const { text, Icon, selectedRoute, _handlePress } = props;

  return (
    <TouchableOpacity
      onPress={() => props._handlePress(props.item)}
      style={{
        backgroundColor:
          selectedRoute === text ? BaseColor.darkPrimaryColor : "white",
        opacity: 0.5,
        padding: 15,
        borderLeftColor:
          selectedRoute === text ? BaseColor.darkPrimaryColor : "white",
        borderLeftWidth: 13,
        marginHorizontal: 5,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {<Icon />}
      <Text
        style={{
          zIndex: 999999,
          fontWeight: "600",
          marginLeft: 5,
          fontSize: 18,
          color: selectedRoute === text ? "white" : BaseColor.darkPrimaryColor,
        }}
      >
        {text || "--"}
      </Text>
    </TouchableOpacity>
  );
};

export const DrawerContent = () => {
  const userData = useSelector((state) => state.user);
  const [router, setRouter] = useState("Home");
  const dispatch = useDispatch();

  const _handlePress = (item) => {
    if (item.text === "Contact") {
      dispatch(closeDrawer(false));
      Alert.alert(
        "Contant us",
        "Email: virtualtryonclothing@gmail.com for any inquiries."
      );
    } else {
      setRouter(item.text);
      if (navigationRef?.current) {
        dispatch(closeDrawer(false));
        navigationRef?.current?.navigate(item.text);
      }
    }
  };

  return (
    <View style={styles.container}>
      <GradientStyle style={styles.avatarBackground}>
        <Image
          source={{ uri: userData?.imageUrl || "" }}
          style={[styles.avatar, { left: -20 }]}
        />

        <View style={styles.textContainer}>
          <Text style={styles.fullName}>{userData?.username || ""}</Text>
          <Text style={styles.email}>{userData?.email || ""}</Text>
        </View>
      </GradientStyle>
      <ScrollView>
        {items.map((el, i) => (
          <MenuItem
            key={i}
            item={el}
            text={el.text}
            Icon={el.Icon}
            selectedRoute={router}
            _handlePress={(item) => {
              _handlePress(item);
            }}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: BaseColor.darkPrimaryColor,
          padding: 15,
          marginHorizontal: 5,
          marginBottom: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Feather
          name="log-out"
          size={22}
          color="white"
          style={{ marginRight: 0 }}
        />
        <Text
          style={{
            zIndex: 999999,
            fontWeight: "600",
            marginLeft: 5,
            fontSize: 18,
            color: "white",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
