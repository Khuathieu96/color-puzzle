import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useCreateStyle } from "../context/ThemeContext/useCreateStyle";

const Button = ({ icon, text, style, onPress, styleText }) => {
  const styles = useCreateStyle(getStyles);
  return (
    <TouchableOpacity style={{ ...styles.root, ...style }} onPress={onPress}>
      {icon}
      <Text style={{ ...styles.text, ...styleText }}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const getStyles = theme =>
  StyleSheet.create({
    root: {
      flexDirection: "row",
      paddingHorizontal: 12,
      height: 64,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white"
    },
    text: {
      color: theme.color.text.gray,
      flex: 1,
      textAlign: "center",
      paddingLeft: 12
    }
  });
