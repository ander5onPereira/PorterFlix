import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import Cartas from './Cartas';
import { Dimensions } from 'react-native';
import { ITResult } from '../../../interfaces/ITResult';
import { useNavigation } from '@react-navigation/native';

interface ITItemList {
  data: ITResult
}

export default function ItemList(routes: ITItemList) {
  const navigation = useNavigation();
  function formatData(itemData: string) {
    var data = itemData.split("-")
    if (data) {
      return `${data[2]}/${data[1]}/${data[0]}`;
    }
    return ""
  }
  function handlerDetalhe(idFilme: number) {
    navigation.navigate("Detalhe", { idFilme: idFilme });
  }
  return (
    <RectButton style={styles.container}
      onPress={() => handlerDetalhe(routes.data.id)} >
      <Cartas source={routes.data.poster_path} />
      <View>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>
            {routes.data.title}
          </Text>
        </View>
        <View>
          <Text style={styles.lancamento}>
            Lançamento: {formatData(routes.data.release_date)}
          </Text>
        </View>
      </View>
      <View style={styles.containerNotas}>
        <View >
          <Text style={styles.textNota}>
            {routes.data.vote_average}
          </Text>
        </View>
        <View>
          <Text style={styles.tituloVoto}>
            Votos
          </Text>
          <Text style={styles.textVoto}>
            {routes.data.vote_count}
          </Text>
        </View>
      </View>
    </RectButton>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    flex: 1,
    width: screenWidth * 0.95,
    flexDirection: "row",
    height: screenHeight * 0.15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

  },
  containerTitulo: {
    paddingTop: 5,
    paddingLeft: 10,
    width: screenWidth * 0.55,
    alignItems: "center",
    height: "65%",
    justifyContent: "center"
  },
  titulo: {
    fontWeight: "bold",
    textAlign: "auto",
    fontSize: 18,
  },
  lancamento: {
    textAlign: "center",
    marginTop: 5,
  },
  containerNotas: {
    marginLeft: 10,
    justifyContent: "space-around"
  },
  textNota: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#0D6E9C",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10
  },
  tituloVoto: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0
  },
  textVoto: {
    textAlign: "center"
  }
})
