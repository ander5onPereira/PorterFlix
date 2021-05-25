import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

interface ITEmissora {
  itens: Array<ITCompanie>;
}
interface ITCompanie {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export default function Emissora({ itens }: ITEmissora) {
  return (
    <Card titulo="Emissora">
      <FlatList
        data={itens}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image
              style={styles.imagem}
              source={{
                uri: `https://www.themoviedb.org/t/p/w92${item.logo_path}`,
              }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 20,
    flex: 1,
    height: 100,
    justifyContent: "center",
  },
  imagem: {
    resizeMode: "contain",
    width: "50%",
    height: "50%",
  },
});
