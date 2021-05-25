import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface ITVotos {
  votos: number;
}
export default function Votos({ votos }: ITVotos) {
  return (
    <View>
      <Text style={styles.tituloVoto}>Votos</Text>
      <Text style={styles.textVoto}>{votos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tituloVoto: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
  textVoto: {
    textAlign: "center",
  },
});
