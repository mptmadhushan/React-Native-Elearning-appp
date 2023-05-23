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
import Chapters from "../screens/Chapters";
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
        <Chapters
          color="#fde6e6"
          percent={25}
          duration="2 hours, 20 minutes"
          title="From Genes to Proteins"
          num={1}
        />

        <Text
          style={{
            fontFamily: "Medium",
            textAlign: "justify",
            color: "#345c74",
            paddingLeft: 42,
            paddingRight: 35,
          }}
        >
          This lesson offers a hands-on simulation of how DNA creates proteins.
          Students are provided with DNA gene sequences, which they must first
          transcribe into mRNA and then translate into a protein to build a new
          species, called the Scimon. Time permitting, students may have the
          opportunity to investigate the effects of three types of mutations
          (insertion, deletion and substitution) on their Scimon model.
        </Text>
        <Camera style={style.camera}>
          <View style={style.buttonContainer}>
            {/* <TouchableOpacity style={style.button} onPress={toggleCameraType}>
              <Text style={style.text}>Flip Camera</Text>
            </TouchableOpacity> */}
          </View>
        </Camera>
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
