//COMPONENTS
import {
  Text,
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
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
import { Feather } from "@expo/vector-icons";

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

  const handleCheckOut = () => {
    Alert.alert("Congratulations", "Your order has been successfully palced!");
  };
  return (
    <>
      <GradientStyle style={parentContainer}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* ITEMS HEADING */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 20,
              marginVertical: 15,
              color: BaseColor.darkPrimaryColor,
            }}
          >
            {PRODUCTS.length || "0"} Items
          </Text>

          {/* CART PRODUCTS LISTING */}
          <ScrollView style={styles.container}>
            {PRODUCTS.map((item, index) => {
              return (
                <View key={index} style={{ marginBottom: 10 }}>
                  <CartItem
                    item={item}
                    isQtyShow={true}
                    showDeleteBtn={true}
                    onDeleteClick={(item) => {
                      alert(JSON.stringify(item));
                    }}
                  />
                </View>
              );
            })}
          </ScrollView>

          {/* CHECKOUT BUTTON */}
          <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckOut}>
            <Feather
              name="log-out"
              size={24}
              color="white"
              style={{ marginRight: 8 }}
            />
            <Text style={styles.checkoutTextButton}>Checkout</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default Cart;
