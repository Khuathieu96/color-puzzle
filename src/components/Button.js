import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ icon, text, style, onPress, styleText }) => {
  return (
    <TouchableOpacity style={{ ...styles.root, ...style }} onPress={onPress}>
      {icon}
      <Text style={{ ...styles.text, ...styleText }}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",

    height: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    paddingLeft: 12
  }
});
