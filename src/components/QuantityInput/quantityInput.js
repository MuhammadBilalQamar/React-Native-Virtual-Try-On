import { BaseColor } from "@config";
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function QuantityInput() {
  let [count, setCount] = useState(1);

  // this will decrease the quantity
  const incrementCount = () => {
    count = count + 1;
    if (count > 0) {
      setCount(count);
    }
  };

  // this will increase the quantity
  const decrementCount = () => {
    count = count - 1;
    if (count > 0) {
      setCount(count);
    }
  };

  return (
    <View
      style={{
        width: "10%",
        display: "flex",
        flexDirection: "column",
        borderWidth: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderColor: BaseColor.darkPrimaryColor,
        borderRadius: 10,
      }}
    >
      <TouchableOpacity
        onPress={incrementCount}
        style={{
          width: "60%",
          height: 30,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          borderBottomColor: BaseColor.darkPrimaryColor,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24 }}> + </Text>
      </TouchableOpacity>
      <Text
        style={{
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        {count}
      </Text>
      <TouchableOpacity
        onPress={decrementCount}
        style={{
          width: "60%",
          height: 30,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          borderTopColor: BaseColor.darkPrimaryColor,
          borderTopWidth: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 24 }}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
