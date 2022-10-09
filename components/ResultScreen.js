import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const ResultScreen = ({ value }) => {
  return (
    <View>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
  },
});
