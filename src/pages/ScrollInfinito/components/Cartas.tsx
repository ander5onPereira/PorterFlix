import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'


const Cartas = ({ source }: any) => {
  return (
    <View style={{}}>
      <Image style={styles.back} source={{ uri: `https://www.themoviedb.org/t/p/w154${source.uri}` }} />
      {/* <Text>{source.uri}</Text> */}
    </View>
  )
}

export default Cartas
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: "#555",
    width: screenWidth,
    flex: 1,
    flexDirection: "row"
  },
  back: {
    width: screenWidth * 0.2,
    height: "100%"
  }
})