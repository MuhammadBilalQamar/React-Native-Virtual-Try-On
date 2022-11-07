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

const ProductDetails = ({ navigation, route }) => {
  let [selectedSize, setSelectedSize] = useState("S");
  const products = useSelector((state) => state.products.products);
  const selectedProduct = route?.params?.product || null;

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
          <View style={styles.container}>
            <ScrollView>
              <View style={{ alignItems: "center", marginHorizontal: 30 }}>
                <Image
                  style={styles.productImg}
                  source={{ uri: selectedProduct?.image }}
                />
                <Text style={styles.name}>{selectedProduct?.title}</Text>
                <Text style={styles.price}>{selectedProduct?.price}</Text>
                <Text style={styles.description}>
                  {selectedProduct?.decription}
                </Text>
              </View>
              <View style={styles.starContainer}>
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png",
                  }}
                />
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png",
                  }}
                />
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png",
                  }}
                />
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png",
                  }}
                />
                <Image
                  style={styles.star}
                  source={{
                    uri: "https://img.icons8.com/color/40/000000/star.png",
                  }}
                />
              </View>
              <View style={styles.contentSize}>
                {selectedProduct?.sizes?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.btnSize,
                        {
                          backgroundColor:
                            item === selectedSize ? "red" : "transparent",
                        },
                      ]}
                      onPress={() => setSelectedSize(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View style={styles.separator}></View>
              <View style={styles.addToCarContainer}>
                <TouchableOpacity
                  style={styles.shareButton}
                  // onPress={() => this.clickEventListener()}
                >
                  <Text style={styles.shareButtonText}>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default ProductDetails;
