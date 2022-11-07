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
import { Ionicons } from "@expo/vector-icons";

//UTILITIES
import { BaseColor, Images } from "@config";

//STYLES
import styles from "./product_styles";

//REDUX
import { useSelector, useDispatch } from "react-redux";

const { parentContainer } = styles;

const Products = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  // const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    try {
      const unsubscribe = navigation.addListener("focus", async () => {});
      return unsubscribe;
    } catch (error) {}
  }, [navigation]);

  const viewProductDetails = (item) => {
    const { id } = item;
    navigation.navigate("ProductDetails", {
      id,
      product: item,
    });
    // Alert.alert("Success", "The product has been added to your cart");
  };

  return (
    <>
      <GradientStyle style={parentContainer}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <FlatList
              style={styles.list}
              contentContainerStyle={styles.listContainer}
              data={products}
              horizontal={false}
              numColumns={2}
              keyExtractor={(item) => {
                return item.id;
              }}
              ItemSeparatorComponent={() => {
                return <View style={styles.separator} />;
              }}
              renderItem={(post) => {
                const item = post.item;
                return (
                  <View style={styles.card}>
                    <View style={styles.cardHeader}>
                      <View>
                        <Text style={styles.title}>{item?.title}</Text>
                        <Text style={styles.price}>{item?.price}</Text>
                      </View>
                    </View>

                    <Image
                      style={styles.cardImage}
                      source={{ uri: item?.image }}
                    />

                    <View style={styles.cardFooter}>
                      <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity
                            style={styles.socialBarButton}
                            onPress={() => viewProductDetails(item)}
                          >
                            <Ionicons
                              name="ios-eye-outline"
                              size={24}
                              color={BaseColor.darkPrimaryColor}
                              style={styles.icon}
                            />
                            <Text style={styles.buyNow}>View</Text>
                          </TouchableOpacity>
                        </View>
                        {/* <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                              style={styles.icon}
                              source={{
                                uri: "https://img.icons8.com/color/50/000000/hearts.png",
                              }}
                            />
                            <Text>25</Text>
                          </TouchableOpacity>
                        </View> */}
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default Products;
