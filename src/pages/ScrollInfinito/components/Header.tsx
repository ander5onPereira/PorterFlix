import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const Header = ({ props, children }: any) => {
  return <View style={styles.back}>{children}</View>;
};

export default Header;
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  back: {
    backgroundColor: "#500",
    width: screenWidth * 0.2,
  },
});
