import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const Post = ({ props, children }: any) => {
  return (
    <RectButton style={styles.container}>
      {children}
    </RectButton>
  )
}

export default Post
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    flex: 1,
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
  }
})
