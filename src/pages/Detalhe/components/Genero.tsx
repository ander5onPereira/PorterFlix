import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import Card from "./Card";

interface ITGenero {
  itens: Array<ITGenre> | [];
}
interface ITGenre {
  id: number;
  name: string;
}
export default function Genero({ itens }: ITGenero) {
  return (
    <Card titulo="Genero">
      <FlatList
        data={itens}
        horizontal
        renderItem={({ item, index }) => (
          <Text>{index == 0 ? item.name : ` | ${item.name}`}</Text>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
