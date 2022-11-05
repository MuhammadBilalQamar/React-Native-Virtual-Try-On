//COMPONENTS
import {
  Text,
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
  AsyncStorage,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GradientStyle, CartItem } from "@components";

//FIREBASE REQUESTS
import { FirebaseRequests, writeUserData } from "@services";

//ICONS
import { AntDesign } from "@expo/vector-icons";

//UTILITIES
import { getLocalData } from "@utils";
import { BaseColor, Images } from "@config";

//CONSTANTS
import { PRODUCTS } from "../../constants/constants";

//STYLES
import styles from "./cart_styles";
const { parentContainer } = styles;

const Cart = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const unsubscribe = navigation.addListener("focus", async () => {});
      return unsubscribe;
    } catch (error) {}
  }, [navigation]);

  return (
    <>
      <GradientStyle style={parentContainer}>
        <SafeAreaView style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 20,
              marginVertical: 15,
              color: BaseColor.darkPrimaryColor,
            }}
          >
            Items
          </Text>
          <ScrollView style={styles.container}>
            <View style={{ marginBottom: 10 }}>
              <CartItem item={PRODUCTS[0]} isQtyShow={true} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <CartItem item={PRODUCTS[1]} isQtyShow={true} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <CartItem item={PRODUCTS[2]} isQtyShow={true} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <CartItem item={PRODUCTS[3]} isQtyShow={true} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <CartItem item={PRODUCTS[4]} isQtyShow={true} />
            </View>
            <View style={{ marginBottom: 10 }}>
              <CartItem item={PRODUCTS[5]} isQtyShow={true} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default Cart;
