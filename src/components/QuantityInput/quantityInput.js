import React, { useState } from "react";
import { View, Button, Text } from "react-native";

export default function CounterInput() {
  let [count, setCount] = useState(0);

  // this will decrease the quantity
  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };

  // this will increase the quantity
  const decrementCount = () => {
    count = count - 1;
    setCount(count);
  };

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={incrementCount}>
        <Text> + </Text>
      </Button>
      <Text>{count}</Text>
      <Button onPress={decrementCount}>
        <Text> - </Text>
      </Button>
    </View>
  );
}
