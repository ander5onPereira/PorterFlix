import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface ITLancamento {
  text: string;
}
export default function Lancamento({ text }: ITLancamento) {
  return <Text style={styles.lancamento}>Lançamento: {text}</Text>;
}

const styles = StyleSheet.create({
  lancamento: {
    textAlign: "center",
    marginTop: 5,
  },
});
