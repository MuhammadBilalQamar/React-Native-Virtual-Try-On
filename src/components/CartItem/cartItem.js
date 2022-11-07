import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import QuantityInput from "../QuantityInput/index";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function CartItem({
  item,
  isQtyShow,
  showDeleteBtn,
  onDeleteClick,
}) {
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
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.name}>
              {truncateString(item?.title, 9) || ""}
            </Text>
            <TouchableOpacity style={styles.btnSize}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {item?.selectedSize}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.decription}>
            {truncateString(item?.decription, 50) || ""}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.price}>{item?.price || ""}</Text>

            {showDeleteBtn && (
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => onDeleteClick(item)}
              >
                <AntDesign
                  name="delete"
                  size={24}
                  color="black"
                  style={styles.deleteBtnText}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {/* QUANTITY INPUT */}
      {isQtyShow && <QuantityInput />}
    </View>
  );
}
