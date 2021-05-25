import React from "react";
import { StyleSheet, Text } from "react-native";
import Card from "./Card";
interface ITEstreia {
  data: string | null;
  titulo: string;
}
export default function CardText({ data, titulo }: ITEstreia) {
  return (
    <Card titulo={titulo}>
      <Text style={styles.text}>{data ? data : ""}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
    fontSize: 15,
  },
  text: {
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: "justify",
  },
});
