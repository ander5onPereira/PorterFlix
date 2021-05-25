import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
interface ITCardButton {
  functionButton: Function;
  children: React.ReactNode;
  id: number;
}
export default function CardButton({
  functionButton,
  children,
  id,
}: ITCardButton) {
  return (
    <RectButton style={styles.container} onPress={() => functionButton(id)}>
      {children}
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
});
