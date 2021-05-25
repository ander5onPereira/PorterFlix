import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import videoBack from "../../../assets/video/Train.mp4";
import Logo from "../../images/PorterFlix-logo.png";
import Button from "./components/Button";

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
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <Image
        source={Logo}
        style={[styles.logo, { transform: [{ rotate: `${graus}deg` }] }]}
      />
      <Button text={"Filmes"} functionButton={handlerList} />
    </View>
  );
}
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: screenWidth,
    height: screenHeight,
  },
  backgroundVideo: {
    height: screenHeight + 30,
    width: screenWidth,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
  },
  logo: {
    resizeMode: "contain",
    width: screenWidth * 0.6,
  },
});
