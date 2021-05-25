import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
interface ITTitulo {
  titulo: string;
}
export default function Titulo({ titulo }: ITTitulo) {
  return (
    <View style={styles.containerTitulo}>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  containerTitulo: {
    paddingTop: 5,
    paddingLeft: 10,
    width: screenWidth * 0.55,
    alignItems: "center",
    height: "65%",
    justifyContent: "center",
  },
  titulo: {
    fontWeight: "bold",
    textAlign: "auto",
    fontSize: 18,
  },
});
