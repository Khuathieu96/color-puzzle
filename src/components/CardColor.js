import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardGame = ({ id, color }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ ...styles.root, backgroundColor: color }}
      // onPress={() => {
      //   navigation.navigate("Game", { stage });
      //   console.log("onpress card game");
      // }}
    />
  );
};
export default CardGame;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 55,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "white"
    // borderRadius: 8
  }
});
