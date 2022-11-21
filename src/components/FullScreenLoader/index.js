import { View, Text, Modal, ActivityIndicator } from "react-native";
import React from "react";
import { BaseColor } from "@config";

export default function FullScreenLoader({
  show,
  setShow,
  showProgress = false,
  progress = 0,
  text,
  uploading = false,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShow(false);
      }}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          opacity: 0.7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={BaseColor.darkPrimaryColor} size={60} />
        {showProgress && (
          <View alignItems="center">
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              {progress} %
            </Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {text || "Loading"}...
            </Text>
          </View>
        )}
        {uploading && <Text style={{ color: "white" }}>video uploading please wait...</Text>}
      </View>
    </Modal>
  );
}
