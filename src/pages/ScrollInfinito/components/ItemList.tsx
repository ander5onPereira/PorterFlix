import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { ITResult } from "../../../interfaces/ITResult";
import Avaliacao from "./Avaliacao";
import CardButton from "./CardButton";
import Cartas from "./Cartas";
import Lancamento from "./Lancamento";
import Titulo from "./Titulo";

interface ITItemList {
  data: ITResult;
}

export default function ItemList(routes: ITItemList) {
  const navigation = useNavigation();
  function formatData(itemData: string) {
    var data = itemData.split("-");
    if (data) {
      return `${data[2]}/${data[1]}/${data[0]}`;
    }
    return "";
  }
  function handlerDetalhe(idFilme: number) {
    navigation.navigate("Detalhe", { idFilme: idFilme });
  }
  return (
    <CardButton functionButton={handlerDetalhe} id={routes.data.id}>
      <Cartas source={routes.data.poster_path} />
      <View>
        <Titulo titulo={routes.data.title} />
        <Lancamento text={formatData(routes.data.release_date)} />
      </View>
      <Avaliacao
        nota={routes.data.vote_average}
        votos={routes.data.vote_count}
      />
    </CardButton>
  );
}
