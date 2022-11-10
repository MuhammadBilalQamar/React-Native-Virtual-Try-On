// REACT COMPONENTS
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  I18nManager,
  TouchableOpacity,
  Text,
} from "react-native";
import { GradientStyle } from "@components";

//STYLES
import styles from "./styles";

//UTILITIES
import { BaseColor } from "@config";

//ICONS
import { Ionicons, Feather } from "@expo/vector-icons";

//REDUX
import { useSelector } from "react-redux";

const items = [
  {
    id: 1,
    text: "Home",
    Icon: (color) => <Ionicons name="home-outline" size={24} color={"black"} />,
  },
  {
    id: 2,
    text: "Cart",
    Icon: (color) => <Ionicons name="cart-outline" size={24} color={"black"} />,
  },
  {
    id: 3,
    text: "Profile",
    Icon: (color) => <Feather name="user" size={24} color={"black"} />,
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
      }}
    >
      {/* {Icon()} */}
      <Text
        style={{
          zIndex: 999999,
          fontWeight: "400",
          fontSize: 20,
          color: selectedRoute === text ? "white" : BaseColor.darkPrimaryColor,
        }}
      >
        {text || "--"}
      </Text>
    </TouchableOpacity>
  );
};

export const DrawerContent = (props) => {
  const userData = useSelector((state) => state.user);
  const [route, setRoute] = useState("Home");

  const _handlePress = (item) => {
    setRoute(item.text);
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
            selectedRoute={route}
            _handlePress={(item) => {
              _handlePress(item);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};
