import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Button from "./components/Button";
import WideButton from "./components/WideButton";
import EmptyButton from "./components/EmptyButton";

import Colors from "./constants/Colors";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const calculator = () => {
    const arr = currentNumber[currentNumber.length - 1];

    if (
      arr === "/" ||
      arr === "*" ||
      arr === "-" ||
      arr === "+" ||
      arr === "."
    ) {
      setCurrentNumber(currentNumber);
      return;
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  };

  const inputHandler = (btn) => {
    if (btn === "+" || btn === "-" || btn === "*" || btn === "/") {
      setCurrentNumber(currentNumber + " " + btn + " ");
      return;
    }
    switch (btn) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "C":
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        setLastNumber(currentNumber + " = ");
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + btn);
  };

  return (
    <View style={styles.main}>
      <StatusBar style="light" />
      <View style={styles.bottomView}>
        <View style={styles.results}>
          <Text style={styles.historyText}>{lastNumber}</Text>
          <Text style={styles.resultText}>{currentNumber}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.row}>
            <WideButton
              text="C"
              onPress={() => inputHandler("C")}
              btnColor={Colors.gray}
            />
            <Button
              text="DEL"
              onPress={() => inputHandler("DEL")}
              btnColor={Colors.gray}
            />
            <Button
              text="/"
              onPress={() => inputHandler("/")}
              btnColor={Colors.blue}
            />
          </View>
          <View style={styles.row}>
            <Button
              text="7"
              onPress={() => inputHandler("7")}
              btnColor={Colors.gray}
            />
            <Button
              text="8"
              onPress={() => inputHandler("8")}
              btnColor={Colors.gray}
            />
            <Button
              text="9"
              onPress={() => inputHandler("9")}
              btnColor={Colors.gray}
            />
            <Button
              text="x"
              onPress={() => inputHandler("*")}
              btnColor={Colors.blue}
            />
          </View>
          <View style={styles.row}>
            <Button
              text="4"
              onPress={() => inputHandler("4")}
              btnColor={Colors.gray}
            />
            <Button
              text="5"
              onPress={() => inputHandler("5")}
              btnColor={Colors.gray}
            />
            <Button
              text="6"
              onPress={() => inputHandler("6")}
              btnColor={Colors.gray}
            />
            <Button
              text="-"
              onPress={() => inputHandler("-")}
              btnColor={Colors.blue}
            />
          </View>
          <View style={styles.row}>
            <Button
              text="1"
              onPress={() => inputHandler("1")}
              btnColor={Colors.gray}
            />
            <Button
              text="2"
              onPress={() => inputHandler("2")}
              btnColor={Colors.gray}
            />
            <Button
              text="3"
              onPress={() => inputHandler("3")}
              btnColor={Colors.gray}
            />
            <Button
              text="+"
              onPress={() => inputHandler("+")}
              btnColor={Colors.blue}
            />
          </View>
          <View style={styles.row}>
            <EmptyButton btnColor={Colors.gray} />
            <Button
              text="0"
              onPress={() => inputHandler("0")}
              btnColor={Colors.gray}
            />
            <Button
              text="."
              onPress={() => inputHandler(".")}
              btnColor={Colors.gray}
            />
            <Button
              text="="
              onPress={() => inputHandler("=")}
              btnColor={Colors.blue}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.background,
    width: "100%",
    height: "100%",
  },
  bottomView: {
    position: "absolute",
    bottom: "5%",
  },
  row: { maxWidth: "100%", flexDirection: "row", alignItems: "center" },
  buttons: { marginHorizontal: 15 },
  results: {
    backgroundColor: Colors.background,
    maxWidth: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 32,
  },
  resultText: {
    color: Colors.blue,
    fontSize: 42,
  },
  historyText: {
    color: Colors.gray,
    fontSize: 20,
    marginRight: 10,
    alignSelf: "flex-end",
  },
});
