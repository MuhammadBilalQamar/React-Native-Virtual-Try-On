import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import QuantityInput from "../QuantityInput/index";
import styles from "./styles";

export default function CartItem({ item, isQtyShow }) {
  let [count, setCount] = useState(1);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        marginHorizontal: 20,
        borderRadius: 10,
      }}
    >
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: item?.image || "" }} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>{item?.title || ""}</Text>
          <Text style={styles.decription}>
            {truncateString(item?.decription, 50) || ""}
          </Text>
          <Text style={styles.price}>{item?.price || ""}</Text>
        </View>
      </View>

      {/* QUANTITY INPUT */}
      {isQtyShow && <QuantityInput />}
    </View>
  );
}