import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import Colors from "../constants/Colors";

const WideButton = ({ text, btnColor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: btnColor }]}
    >
      <Text style={styles.font}>{text}</Text>
    </TouchableOpacity>
  );
};

export default WideButton;

const styles = StyleSheet.create({
  button: {
    width: 152,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
  },
  font: {
    fontSize: 24,
    color: Colors.white,
  },
});
