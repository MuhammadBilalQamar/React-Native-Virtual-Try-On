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
import { BaseColor, Images } from "@config";

//STYLES
import styles from "./product_details_styles";

//REDUX
import { useSelector, useDispatch } from "react-redux";

const { parentContainer } = styles;

const ProductDetails = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const cartItems = useSelector((state) => state.products.products);

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
            {cartItems?.length || "0"} Items
          </Text>

          {/* CART PRODUCTS LISTING */}
          <ScrollView style={styles.container}>
            {cartItems &&
              cartItems.map((item, index) => {
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

export default ProductDetails;
