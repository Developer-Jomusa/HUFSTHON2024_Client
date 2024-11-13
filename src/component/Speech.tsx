import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { moderateScale } from "../util/ScreenScaler";

const Speech = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <Text style={styles.text}>Hello, this is a speech bubble!</Text>
      </View>
      <View style={styles.triangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: moderateScale(50) ,
  },
  bubble: {
    backgroundColor: "#f5f5f5", // 말풍선 배경색
    padding: moderateScale(15),               // 텍스트 여백
    borderRadius: moderateScale(22),          // 둥근 모서리
    width: moderateScale(274),             // 최대 너비
    height:moderateScale(136),
    // shadowColor: "#000",       // 그림자 효과
    // shadowOffset: { width: moderateScale(0), height: moderateScale(2) },
    // shadowOpacity:moderateScale(0.3),
    // shadowRadius: moderateScale(3),
    // elevation: moderateScale(5),              // Android 그림자 효과
  },
  triangle: {
    width: moderateScale(0),
    height: moderateScale(0),
    borderLeftWidth:moderateScale(10),
    borderRightWidth: moderateScale(10),
    borderTopWidth: moderateScale(15),
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#f5f5f5", // 삼각형 색상
  },
  
  text: {
    color: "#333", // 텍스트 색상
    fontSize: moderateScale(14),
  },
});

export default Speech;
