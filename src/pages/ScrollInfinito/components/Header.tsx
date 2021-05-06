import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

const Header = ({ props, children }: any) => {
  return (
    <View style={styles.back}>
      {children}
    </View>
  )
}

export default Header
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
    backgroundColor: "#500",
    width: screenWidth * 0.2,
  }
})