//COMPONENTS
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { GradientStyle } from "@components";

//ICONS
import { Ionicons } from "@expo/vector-icons";

//UTILITIES
import { BaseColor } from "@config";

//STYLES
import styles from "./product_styles";

// REDUX ELEMENTS FOR LOCAL DATA STORAGE
import { useSelector } from "react-redux";

const Products = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    try {
      const unsubscribe = navigation.addListener("focus", async () => {});
      return unsubscribe;
    } catch (error) {}
  }, [navigation]);

  // this function will navigate user to the selected product details screen
  const viewProductDetails = (item) => {
    const { id } = item;
    navigation.navigate("ProductDetails", {
      id,
      product: item,
    });
  };

  // this is the ui renderation part
  return (
    <>
      <GradientStyle style={styles.parentContainer}>
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
