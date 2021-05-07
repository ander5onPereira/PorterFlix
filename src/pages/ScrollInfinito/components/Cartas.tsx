import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Dimensions } from 'react-native';
interface ItCartas {
  source: string
}
export default function Cartas(routes: ItCartas) {
  return (
    <View>
      <Image style={styles.imagem}
        source={{ uri: `https://www.themoviedb.org/t/p/w154${routes.source}` }} />
    </View>
  )
}

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  imagem: {
    width: screenWidth * 0.2,
    height: "100%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  }
})