import React from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import Chapters from "./Chapters";
import { Camera, CameraType } from "expo-camera";
const { width, height } = Dimensions.get("window");

export default class VideoPage extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#f58084" />
        <Video
          source={require("../videos/les01.mp4")}
          rate={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          isLooping={false}
          useNativeControls
          style={style.video}
        />
        

        <Text
          style={{
            fontFamily: "Medium",
            textAlign: "justify",
            color: "#345c74",
            paddingLeft: 42,
            padding: 42,
            paddingRight: 35,
          }}
        >
        Cillum aliquip proident mollit tempor Lorem laboris minim do fugiat sit non.
        </Text>
        <Video
          source={require("../videos/les01.mp4")}
          rate={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          isLooping={false}
          useNativeControls
          style={style.video}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
          style={{
            flexDirection: "row",
            paddingVertical: 5,
            backgroundColor: "#f58084",
            marginHorizontal: 40,
            paddingVertical: 15,
            alignItems: "center",
            borderRadius: 10,
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Bold",
              fontSize: 15,
              marginRight: 50,
            }}
          >
            Back
          </Text>
          <Image source={require("../images/a3.png")} />
        </TouchableOpacity>
      </View>
    );
  }
}
const style = StyleSheet.create({
  video: {
    width: width,
    height: height / 3,
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
