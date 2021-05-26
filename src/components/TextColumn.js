import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useCreateStyle } from "../context/ThemeContext/useCreateStyle";
import { AntDesign } from "react-native-vector-icons";

const TextColumn = ({ text, num, iconName, color, styleText, styleNum }) => {
  const styles = useCreateStyle(getStyles);
  return (
    <View style={{ ...styles.text__column, ...styleText }}>
      <Text style={styles.text__column__text}>{text}</Text>
      {num && (
        <Text style={{ ...styles.text__column__num, ...styleNum }}>{num}</Text>
      )}
      {iconName && <AntDesign name={iconName} size={30} color={color} />}
    </View>
  );
};

export default TextColumn;

const getStyles = theme =>
  StyleSheet.create({
    text__column: {
      padding: 4,
      alignItems: "center"
    },
    text__column__text: {
      ...theme.text.header2,
      textAlign: "center",
      paddingBottom: 4,
      color: theme.color.text.red
    },
    text__column__num: {
      ...theme.text.header2,
      color: theme.color.text.gray
    }
  });
