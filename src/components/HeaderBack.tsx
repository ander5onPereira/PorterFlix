import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function HeaderBack() {
  const navigation = useNavigation();
  function back() {
    navigation.goBack();
  }
  return (
    <RectButton onPress={back} style={styles.button}>
      <Feather name="arrow-left" size={25} color={colorIcon} />
    </RectButton>
  )
}

const colorIcon = "#fff"
const styles = StyleSheet.create({
  button: {
    marginLeft: 10
  }
});