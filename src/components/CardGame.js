import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCreateStyle } from "../context/ThemeContext/useCreateStyle";
import DialogFinishedGame from "./DialogFinishedGame";

const CardGame = ({ id, stage, isFinished }) => {
  const navigation = useNavigation();
  const styles = useCreateStyle(getStyles(isFinished));
  const [openDialogFinishedGame, setOpenDialogFinishedGame] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.root}
        onPress={() => {
          if (isFinished) {
            setOpenDialogFinishedGame(true);
          } else {
            navigation.navigate("Game", { stage });
          }
        }}
      >
        <Text style={styles.text}>{stage}</Text>
      </TouchableOpacity>

      {openDialogFinishedGame && (
        <DialogFinishedGame
          open={openDialogFinishedGame}
          onClose={() => setOpenDialogFinishedGame(false)}
        />
      )}
    </View>
  );
};
export default CardGame;

const getStyles = isFinished => theme => {
  return StyleSheet.create({
    root: {
      // width: "100%",
      // flex: 1,
      width: 60,
      height: 60,
      padding: 4,
      margin: 4,
      alignItems: "flex-end",
      justifyContent: "flex-end",
      backgroundColor: isFinished
        ? theme.color.background.white
        : "transparent",
      borderColor: isFinished ? "transparent" : theme.color.text.gray,
      borderWidth: 1,
      borderRadius: 8
    }
  });
};
