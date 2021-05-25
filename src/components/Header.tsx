import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

export default function Header() {
  const navigation = useNavigation();
  function handlerDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <BorderlessButton
          onPress={handlerDrawer}
          style={styles.buttonMenu}
          rippleColor={corSegundaria}
        >
          <Feather name="menu" size={24} color={corPrimaria} />
        </BorderlessButton>
      </View>
      <View>
        <RectButton onPress={() => { console.log("ON") }} rippleColor={corSegundaria} style={styles.button}>
          <Text style={styles.title}>Series</Text>
        </RectButton>
      </View>
      <View >
        <RectButton onPress={() => { console.log("ON") }} rippleColor={corSegundaria} style={styles.button}>
          <Text style={styles.title}>Filmes</Text>
        </RectButton>
      </View>
      <View>
        <RectButton onPress={() => { console.log("ON") }} rippleColor={corSegundaria} style={styles.button}>
          <Text style={styles.title}>Minhas Lista</Text>
        </RectButton>
      </View>
    </View>
  );
}
const corPrimaria = "#04b2d9";
const corSegundaria = "rgba(4, 178, 217,0.5)";
const corBackgroud = "#0A1626";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: corBackgroud,
    height: 80,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: corPrimaria,
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 10
  },
  button: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  buttonMenu: {
    paddingRight: 10
  }
});