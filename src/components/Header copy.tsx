import * as React from "react";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Entypo, Feather } from "@expo/vector-icons";

interface HeradeProps {
  title: string;
  showCancel?: boolean;
}
//00ae9d
const color06 = "#ffffff";
const color01 = "#1C2F40";
const color02 = "#0D1A26";
const color03 = "#626973";
const color04 = "#04080D";
const color05 = "#F0F0F2";
const color = "#04B2D9";
const backgroud = "#0A1626";

export default function Header({ title, showCancel = true }: HeradeProps) {
  const navigation = useNavigation();
  function handlerGoBackToHome() {

    navigation.dispatch(DrawerActions.openDrawer());
    //navigation.navigate("Menu");
  }
  async function back() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={{}}>
        {!showCancel ? (
          <>
            <BorderlessButton
              onPress={handlerGoBackToHome}
              style={{ paddingRight: 10 }}
            >
              <Entypo name="menu" size={28} color={color} />
            </BorderlessButton>
            {/* <BorderlessButton onPress={back}>
            <Feather
              name="arrow-left"
              size={26}
              color="#00ae9d"
              style={{ paddingTop: 5 }}
            />
          </BorderlessButton> */}
          </>
        ) : (
          <View style={{ width: 26 }} />
        )}
      </View>

      <View style={{}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{}}>
        {showCancel ? (
          <BorderlessButton
            onPress={handlerGoBackToHome}
            style={{ paddingRight: 10 }}
          >
            <Feather name="x" size={24} color="#00ae9d" />
          </BorderlessButton>
        ) : (
          <View style={{ width: 45 }} />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    backgroundColor: backgroud,
    /* borderBottomWidth: 1, */
    /*  borderColor: "#dde3f0", */
    height: 80,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: color,
    fontSize: 20,
    fontWeight: "700",
  },
});