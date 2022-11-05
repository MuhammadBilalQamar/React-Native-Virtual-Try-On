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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { GradientStyle } from "@components";
import { BaseColor, Images } from "../../config";
import styles from "./home_styles";
import { PRODUCTS } from "../../constants/constants";

//ICONS
import { AntDesign } from "@expo/vector-icons";

const { parentContainer } = styles;

const Home = ({ navigation }) => {
  const [passwordVisible, showpasswordVisible] = useState(false);

  useEffect(() => {}, []);
  const addProductToCart = () => {
    Alert.alert("Success", "The product has been added to your cart");
  };

  return (
    <>
      <GradientStyle style={parentContainer}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <FlatList
              style={styles.list}
              contentContainerStyle={styles.listContainer}
              data={PRODUCTS}
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
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                      </View>
                    </View>

                    <Image
                      style={styles.cardImage}
                      source={{ uri: item.image }}
                    />

                    <View style={styles.cardFooter}>
                      <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity
                            style={styles.socialBarButton}
                            onPress={() => addProductToCart()}
                          >
                            <Image
                              style={styles.icon}
                              source={{
                                uri: "https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png",
                              }}
                            />
                            <Text
                              style={[styles.socialBarLabel, styles.buyNow]}
                            >
                              Buy Now
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image
                              style={styles.icon}
                              source={{
                                uri: "https://img.icons8.com/color/50/000000/hearts.png",
                              }}
                            />
                            <Text style={styles.socialBarLabel}>25</Text>
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

export default Home;
