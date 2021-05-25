import React from "react";
import { StyleSheet, Text } from "react-native";
interface ITTitulo {
  text?: string;
}
export default function Titulo({ text }: ITTitulo) {
  return <Text style={styles.textTitulo}>{text}</Text>;
}
const styles = StyleSheet.create({
  textTitulo: {
    textAlign: "center",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 22,
  },
});
