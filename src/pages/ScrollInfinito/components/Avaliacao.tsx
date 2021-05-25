import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Votos from "./Votos";
interface ITAvaliacao {
  votos: number;
  nota: number;
}
export default function Avaliacao({ votos, nota }: ITAvaliacao) {
  return (
    <View style={styles.containerNotas}>
      <View>
        <Text style={styles.textNota}>{nota}</Text>
      </View>
      <Votos votos={votos} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerNotas: {
    marginLeft: 10,
    justifyContent: "space-around",
  },
  textNota: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#0D6E9C",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
  },
  tituloVoto: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
  textVoto: {
    textAlign: "center",
  },
});
