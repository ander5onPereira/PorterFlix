import "react-native-gesture-handler";
import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useLayoutEffect } from 'react';
import { API_KEY } from '../../../config';
import { ITDetalhe } from '../../interfaces/ITDetalhe';
import { ScrollView } from 'react-native';

export default function Detalhe({ route }: any) {
  const [idFilme, setIdFilme] = useState(route.params?.idFilme);
  const [detalhe, setDetalhe] = useState<ITDetalhe | null>(null);
  async function loadPage() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${idFilme}&language=pt-br`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      }
    });
    const data: ITDetalhe = await response.json();
    setDetalhe(data);

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
  return (
    <ScrollView style={{ backgroundColor: "rgba(10, 22, 38,0.1)" }}>
      <Text style={{ textAlign: "center", marginVertical: 5, fontWeight: "bold", fontSize: 22 }}>{detalhe?.original_title}</Text>
      <Image style={styles.back} source={{ uri: `https://www.themoviedb.org/t/p/w500${detalhe?.backdrop_path}` }} />
      <View style={{ marginHorizontal: 20 }}>
        <View>

          <View style={{ alignItems: "center", marginVertical: 15, backgroundColor: "rgba(10, 22, 38,0.2)", borderRadius: 10, paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Genero</Text>
            <FlatList data={detalhe?.genres} horizontal
              renderItem={({ item, index }) => (<Text >{index == 0 ? item.name : ` | ${item.name}`}</Text>)}
              keyExtractor={item => String(item.id)} />
          </View>

          <View style={{ alignItems: "center", backgroundColor: "rgba(10, 22, 38,0.2)", marginVertical: 5, borderRadius: 10, paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Sinopse:
            </Text>
            <Text style={{ marginVertical: 10, marginHorizontal: 10, textAlign: "justify" }}>
              {detalhe?.overview}</Text>
          </View>

          <View style={{ backgroundColor: "rgba(10, 22, 38,0.2)", marginVertical: 5, borderRadius: 10, paddingVertical: 10 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16 }}>Emissora</Text>
            <FlatList data={detalhe?.production_companies} horizontal
              renderItem={({ item, index }) => (<>
                <View style={{ alignItems: "center", marginHorizontal: 20, flex: 1, height: 100, justifyContent: "center" }}>

                  <Image style={{ resizeMode: "contain", width: "50%", height: "50%" }} source={{ uri: `https://www.themoviedb.org/t/p/w92${item.logo_path}` }} />

                  <Text>{item.name}</Text>
                </View></>
              )}
              keyExtractor={item => String(item.id)} />
          </View>
          <View style={{ flexDirection: "row", marginVertical: 5, paddingVertical: 10, backgroundColor: "rgba(10, 22, 38,0.2)", paddingHorizontal: 10, borderRadius: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Data de Lançamento: </Text>
            <Text >{detalhe ? formatData(detalhe.release_date) : "-"}</Text>
          </View>
          <View>
            <Text></Text>
          </View>
        </View>
      </View >
    </ScrollView>

  )
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  back: {
    width: screenWidth,
    height: screenWidth * (439 / 780),
    marginVertical: 10
  }
})
