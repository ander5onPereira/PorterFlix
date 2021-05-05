import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import videoBack from "../../../assets/video/Train.mp4";
import Logo from "../../images/PorterFlix-logo.png";

export default function Home() {
  const navigation = useNavigation();
  function handlerList() {
    navigation.navigate("List");
  }
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [graus, setGraus] = useState(0);
  const [soma, setSoma] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (graus > 15) {
        setSoma(-0.5);
      } else if (graus <= -15) {
        setSoma(0.5);
      }
      setGraus(graus + soma);
    }, 50);
    return () => clearTimeout(timer);
  }, [graus]);

  return (
    <View style={styles.container}>

      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={videoBack}
        shouldPlay
        isMuted={true}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <Image source={Logo} style={{ resizeMode: "contain", width: screenWidth * 0.6, transform: [{ rotate: `${graus}deg` }] }} />
      <RectButton onPress={handlerList} style={styles.button}>
        <Text style={styles.textBtn}>Filmes
        </Text>
      </RectButton>
    </View>
  );
}
const color = "#04B2D9";
const backgroud = "#0A1626";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: screenWidth,
    height: screenHeight
  },
  button: {
    backgroundColor: color,
    borderRadius: 15,
    width: screenWidth * 0.8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  backgroundVideo: {
    height: screenHeight + 30,
    width: screenWidth,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  },
  input: {
    backgroundColor: "#fff",
    marginVertical: 10
  },
  textBtn: {
    fontWeight: "bold",
    fontSize: 18,
    color: backgroud
  }
})