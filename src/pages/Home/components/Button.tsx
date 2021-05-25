import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ITButton {
  text: string;
  functionButton: Function;
}
export default function Button({ text, functionButton }: ITButton) {
  return (
    <RectButton onPress={() => functionButton()} style={styles.button}>
      <Text style={styles.textBtn}>{text}</Text>
    </RectButton>
  );
}
const color = "#04B2D9";
const backgroud = "#0A1626";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  button: {
    backgroundColor: color,
    borderRadius: 15,
    width: screenWidth * 0.8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  textBtn: {
    fontWeight: "bold",
    fontSize: 18,
    color: backgroud,
  },
});
