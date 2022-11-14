//COMPONENTS
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GradientStyle } from "@components";

//UTILITIES
import { BaseColor } from "@config";
import { removeObjectFromArray } from "@utils";

//CONSTANTS
import { MESSAGES } from "@constants/constants";

// REDUX ELEMENTS FOR LOCAL DATA STORAGE
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "@redux/reducers/cart/action";

//STYLES
import styles from "./product_details_styles";

const ProductDetails = ({ navigation, route }) => {
  let [selectedSize, setSelectedSize] = useState("S");
  let [isLoading, setIsLoading] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const selectedProduct = route?.params?.product || null;
  const dispatch = useDispatch();
  const isCurrentProductAvailableInCart = cartItems?.find(
    (i) => i.id == selectedProduct.id
  );

  useEffect(() => {
    try {
      const unsubscribe = navigation.addListener("focus", async () => {});
      return unsubscribe;
    } catch (error) {}
  }, [navigation, selectedSize]);

  // this function will add the selected product in the cart
  const addToCart = async (product) => {
    if (!isCurrentProductAvailableInCart) {
      product["selectedSize"] = selectedSize;
      product["selectedQty"] = 1;
      cartItems.push(product);
      dispatch(addCartItem(cartItems));
      setIsLoading(!isLoading);
      alert(`${product?.title} ${MESSAGES.PRODUCT_ADDED_TO_CART}`);
    }
  };

  // this function will remove the selected product from cart
  const removeFromCart = async (product) => {
    const { id } = product;
    const newCart = removeObjectFromArray(cartItems, "id", id);
    dispatch(addCartItem(newCart));
    alert(`${product?.title} ${MESSAGES.PRODUCT_REMOVED_FROM_CART}`);
  };

  // this is the UI renderation part
  return (
    <>
      <GradientStyle style={styles.parentContainer}>
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
              {/* <View style={styles.starContainer}>
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
              </View> */}
              <View style={styles.contentSize}>
                {selectedProduct?.sizes?.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.btnSize,
                        {
                          backgroundColor:
                            item === selectedSize ? "#3df700" : "transparent",
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
                {!isCurrentProductAvailableInCart ? (
                  <TouchableOpacity
                    style={styles.shareButton}
                    onPress={() => addToCart(selectedProduct)}
                  >
                    <Text style={styles.shareButtonText}>Add To Cart</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={[
                      styles.shareButton,
                      { backgroundColor: BaseColor.redColor },
                    ]}
                    onPress={() => removeFromCart(selectedProduct)}
                  >
                    <Text style={styles.shareButtonText}>Remove from cart</Text>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </GradientStyle>
    </>
  );
};

export default ProductDetails;
