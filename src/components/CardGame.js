import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardGame = ({ id, stage }) => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.root}
      onPress={() => {
        navigation.navigate("Game", { stage });
      }}
    >
      <Text style={styles.text}>{stage}</Text>
    </View>
  );
};
export default CardGame;

const styles = StyleSheet.create({
  root: {
    width: 60,
    height: 60,
    padding: 6,
    margin: 6,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "whitesmoke",
    borderRadius: 8
  }
});
