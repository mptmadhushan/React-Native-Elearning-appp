import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";
import Chapters from "./Chapters";

export default class CoursePage extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/crs.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#9a3c7e",
            }}
          >
            <Image
              source={require("../images/a1.png")}
              style={{ height: 15, width: 20 }}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#9a3c7e",
              marginLeft: 240,
            }}
          >
            <Image
              source={require("../images/hum.png")}
              style={{ height: 15, width: 20 }}
            />
          </View>
        </View>

        <Text
          style={{
            color: "#FFF",
            fontFamily: "Bold",
            fontSize: 35,
            width: 200,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Ranking
        </Text>
        {/* <Text
          style={{
            color: "#FFF",
            fontFamily: "Medium",
            fontSize: 35,
            width: 200,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Essentials
        </Text> */}

        <Modalize
          handleStyle={{
            marginTop: 30,
            backgroundColor: "#e9e9e9",
            width: 80,
          }}
          modalStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
          alwaysOpen={510}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
        >
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 30,
              marginTop: 40,
            }}
          >
            <Image
              source={require("../images/2.jpg")}
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                borderColor: "#f58084",
                borderRadius: 50,
              }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Text
                style={{
                  color: "#345c74",
                  fontFamily: "Bold",
                  fontSize: 18,
                }}
              >
                Dev user
              </Text>
              <Text
                style={{
                  color: "#f58084",
                  fontFamily: "Medium",
                  fontSize: 12,
                }}
              >
                Student
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff2f2",
                width: 40,
                height: 40,
                borderRadius: 40,
              }}
            >
              <Image source={require("../images/a2.png")} />
            </View>
          </View>
          <View>
            <Chapters
              num={2}
              color="#f9e1fc"
              percent={50}
              duration="1 hours, 35 minutes"
              title="User 001"
            />
            <Chapters
              num={3}
              color="#e8f1fd"
              percent={0}
              duration="User 001"
              title="User 003"
            />
            <Chapters
              num={4}
              color="#e5ffef"
              percent={10}
              duration="User 001"
              title="User 004"
            />
            <Chapters
              num={5}
              color="#fbfaf6"
              percent={22}
              duration="0 hours, 30 minutes"
              title="User 007"
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
            style={{
              flexDirection: "row",
              paddingVertical: 5,
              backgroundColor: "#fff2f2",
              marginHorizontal: 20,
              paddingVertical: 15,
              alignItems: "center",
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#f58084",
                fontFamily: "Bold",
                fontSize: 13,
                marginRight: 50,
              }}
            >
              Close
            </Text>
            <Image source={require("../images/a2.png")} />
          </TouchableOpacity>
        </Modalize>
      </ImageBackground>
    );
  }
}
