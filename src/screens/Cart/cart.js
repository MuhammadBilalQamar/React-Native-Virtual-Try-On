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
import { removeObjectFromArray } from "@utils";

//STYLES
import styles from "./cart_styles";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "@redux/reducers/cart/action";

const { parentContainer } = styles;

const Cart = ({ navigation }) => {
  const [isLoading, setILoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const unsubscribe = navigation.addListener("focus", async () => {
        setILoading(!isLoading);
      });
      return unsubscribe;
    } catch (error) {}
  }, [navigation, isLoading]);

  const handleCheckOut = () => {
    dispatch(addCartItem([]));
    Alert.alert("Congratulations", "Your order has been successfully palced!");
  };

  const handleDelete = (product) => {
    const { id } = product;
    Alert.alert(
      "Are you sure?",
      `do you want to remove ${product?.title} from cart?`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            const newCart = removeObjectFromArray(cartItems, "id", id);
            dispatch(addCartItem(newCart));
          },
          style: "cancel",
        },
      ]
    );
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
            {cartItems?.length || "0"} Items In Cart
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
                        handleDelete(item);
                      }}
                    />
                  </View>
                );
              })}
          </ScrollView>

          {/* CHECKOUT BUTTON */}
          <TouchableOpacity
            style={[
              styles.checkoutBtn,
              { opacity: !cartItems || cartItems.length === 0 ? 0.5 : 1 },
            ]}
            onPress={handleCheckOut}
            disabled={!cartItems || cartItems.length === 0}
          >
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
