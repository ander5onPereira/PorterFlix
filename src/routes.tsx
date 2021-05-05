import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image } from "react-native";
import Logo from "./images/PorterFlix-logo.png";
import Detalhe from "./pages/Detalhe";
import Home from "./pages/Home";
import ScrollInfinito from "./pages/ScrollInfinito";
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="List"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#0A1626" },
          headerTintColor: "#04B2D9",
          headerTitle: () => (<Image source={Logo} style={{ resizeMode: "contain", width: 100 }} />)
        }}
        component={ScrollInfinito}
      />
      <Stack.Screen
        name="Detalhe"
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#0A1626" },
          headerTintColor: "#04B2D9",
          headerTitle: () => (<Image source={Logo} style={{ resizeMode: "contain", width: 100 }} />)
        }}
        component={Detalhe}
      />
    </Stack.Navigator>
  )
}