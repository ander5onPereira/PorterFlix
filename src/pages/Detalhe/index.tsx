import "react-native-gesture-handler";
import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
import { TOKEN } from "../../../config";
import { ITDetalhe } from "../../interfaces/ITDetalhe";
import { ScrollView } from "react-native";
import Loading from "../ScrollInfinito/components/Loading";
import Titulo from "./components/Titulo";
import Genero from "./components/Genero";
import Emissora from "./components/Emissora";

import CardText from "./components/CardText";

export default function Detalhe({ route }: any) {
  const [idFilme, setIdFilme] = useState(route.params?.idFilme);
  const [detalhe, setDetalhe] = useState<ITDetalhe | null>(null);
  const [loading, setLoading] = useState(false);
  async function loadPage() {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${idFilme}&language=pt-br`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + TOKEN,
        },
      }
    );
    const data: ITDetalhe = await response.json();
    setDetalhe(data);
    setLoading(false);
  }
  function formatData(itemData: string) {
    var data = itemData.split("-");
    if (data) {
      return `${data[2]}/${data[1]}/${data[0]}`;
    }
    return "--";
  }
  useLayoutEffect(() => {
    loadPage();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <ScrollView style={styles.container}>
        <Titulo text={detalhe?.original_title} />
        <Image
          style={styles.imagemBack}
          source={{
            uri: `https://www.themoviedb.org/t/p/w500${detalhe?.backdrop_path}`,
          }}
        />
        <View style={styles.containerDetalhes}>
          <Genero itens={detalhe ? detalhe.genres : []} />
          <CardText data={detalhe ? detalhe.overview : ""} titulo={"Sinopse"} />
          <Emissora itens={detalhe ? detalhe.production_companies : []} />
          <CardText
            data={detalhe ? formatData(detalhe.release_date) : "--"}
            titulo={"Estreia"}
          />
        </View>
      </ScrollView>
    );
  }
}

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(10, 22, 38,0.1)",
  },
  imagemBack: {
    width: screenWidth,
    height: screenWidth * (439 / 780),
    marginVertical: 10,
  },
  containerDetalhes: {
    marginHorizontal: 20,
  },
});
