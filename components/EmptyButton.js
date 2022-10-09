import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../constants/Colors";

const EmptyButton = ({ btnColor }) => {
  return <View style={[styles.button, { backgroundColor: btnColor }]}></View>;
};

export default EmptyButton;

const styles = StyleSheet.create({
  button: {
    width: 72,
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
