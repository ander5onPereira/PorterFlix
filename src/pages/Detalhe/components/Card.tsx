import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface ITCard {
  titulo: string;
  children: React.ReactNode;
}

export default function Card({ children, titulo }: ITCard) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(10, 22, 38,0.2)",
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
