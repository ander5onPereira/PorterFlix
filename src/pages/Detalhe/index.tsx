import "react-native-gesture-handler";
import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useLayoutEffect } from 'react';
import { TOKEN } from '../../../config';
import { ITDetalhe } from '../../interfaces/ITDetalhe';
import { ScrollView } from 'react-native';
import Loading from "../ScrollInfinito/components/Loading";

export default function Detalhe({ route }: any) {
  const [idFilme, setIdFilme] = useState(route.params?.idFilme);
  const [detalhe, setDetalhe] = useState<ITDetalhe | null>(null);
  const [loading, setLoading] = useState(false);
  async function loadPage() {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${idFilme}&language=pt-br`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
      }
    });
    const data: ITDetalhe = await response.json();
    setDetalhe(data);
    setLoading(false);
  }
  function formatData(itemData: string) {
    var data = itemData.split("-")
    if (data) {
      return `${data[2]}/${data[1]}/${data[0]}`;
    }
    return "-";
  }
  useLayoutEffect(() => {
    loadPage();
  }, [])
  if (loading) {
    return (<Loading />)
  } else {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textTitulo}>
          {detalhe?.original_title}
        </Text>
        <Image style={styles.imagemBack}
          source={{ uri: `https://www.themoviedb.org/t/p/w500${detalhe?.backdrop_path}` }} />
        <View style={styles.containerDetalhes}>
          <View>
            <View style={styles.containerDestaque}>
              <Text style={styles.textSubTitulo}>
                Genero
              </Text>
              <FlatList data={detalhe?.genres}
                horizontal
                renderItem={({ item, index }) => (
                  <Text >
                    {index == 0 ? item.name : ` | ${item.name}`}
                  </Text>
                )}
                keyExtractor={item => String(item.id)} />
            </View>
            <View style={styles.containerDestaque}>
              <Text style={styles.textSubTitulo}>
                Sinopse
              </Text>
              <Text style={styles.containerListText}>
                {detalhe?.overview}
              </Text>
            </View>
            <View style={styles.containerDestaque}>
              <Text style={styles.textSubTitulo}>
                Emissora
              </Text>
              <FlatList data={detalhe?.production_companies}
                horizontal
                renderItem={({ item }) => (
                  <>
                    <View style={styles.containerList}>
                      <Image style={styles.imagemList}
                        source={{ uri: `https://www.themoviedb.org/t/p/w92${item.logo_path}` }} />
                      <Text>{item.name}</Text>
                    </View>
                  </>
                )}
                keyExtractor={item => String(item.id)} />
            </View>
            <View style={styles.containerDestaque}>
              <Text style={styles.textSubTitulo}>
                Estreia
              </Text>
              <Text >
                {detalhe ? formatData(detalhe.release_date) : "-"}
              </Text>
            </View>
          </View>
        </View >
      </ScrollView>
    )
  }
}

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(10, 22, 38,0.1)"
  },
  textTitulo: {
    textAlign: "center",
    marginVertical: 5,
    fontWeight: "bold",
    fontSize: 22
  },
  imagemBack: {
    width: screenWidth,
    height: screenWidth * (439 / 780),
    marginVertical: 10
  },
  containerDetalhes: {
    marginHorizontal: 20
  },
  containerGenero: {
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "rgba(10, 22, 38,0.2)",
    borderRadius: 10,
    paddingVertical: 10
  },
  textSubTitulo: {
    fontWeight: "bold",
    fontSize: 15
  },
  containerDestaque: {
    alignItems: "center",
    backgroundColor: "rgba(10, 22, 38,0.2)",
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10
  },
  containerList: {
    alignItems: "center",
    marginHorizontal: 20,
    flex: 1,
    height: 100,
    justifyContent: "center"
  },
  containerListText: {
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: "justify"
  },
  imagemList: {
    resizeMode: "contain",
    width: "50%",
    height: "50%"
  }
})
