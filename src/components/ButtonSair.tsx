import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export default function ButtonSair() {
  const navigation = useNavigation();
  function handlerSair() {
    navigation.navigate("Home");
  }
  return (
    <RectButton style={styles.button} rippleColor={corSegundaria} onPress={handlerSair} >
      <FontAwesome5 name="sign-out-alt" size={20} color={corSegundaria} style={styles.icon} />
      <Text style={styles.text}> Sair</Text>
    </RectButton>
  )
}
const corSegundaria = "rgba(4, 178, 217,0.5)";
const styles = StyleSheet.create({
  button: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10
  },
  text: {
    color: corSegundaria
  }
});