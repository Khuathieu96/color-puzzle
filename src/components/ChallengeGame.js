import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useCreateStyle } from "../context/ThemeContext/useCreateStyle";
import { EvilIcons } from "react-native-vector-icons";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext/ThemeContext";

const ChallengeGame = ({ title, steps }) => {
  const styles = useCreateStyle(getStyles);
  const { state } = useTheme();

  return (
    <View style={styles.text__column}>
      <Text style={styles.text__column__text}>{title}</Text>
      <View style={styles.text__column__description}>
        <Text style={styles.text__column__move}>Finish in {steps} moves</Text>
        <Text style={styles.text__column__num}>Reward: Free wallpaper</Text>
      </View>

      <View style={styles.image__row}>
        <Image style={styles.image} source={""}></Image>
        <Image style={styles.image} source={""}></Image>
      </View>
      <View style={styles.button__row}>
        <Button
          style={styles.button__set__wallpaper}
          styleText={styles.button__text__wallpaper}
          icon={
            <EvilIcons name="image" size={30} color={state.color.text.gray} />
          }
          text="SET AS WALLPAPER"
        />
        <Button style={styles.button} text="START" />
      </View>
    </View>
  );
};

export default ChallengeGame;

const getStyles = theme =>
  StyleSheet.create({
    button__row: {
      flexDirection: "row"
    },
    image: {
      width: "40%",
      borderRadius: 4,
      height: 200,
      backgroundColor: theme.color.background.gray
    },
    image__row: {
      marginTop: 16,
      marginBottom: 32,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    button__set__wallpaper: {
      borderRadius: 4,
      flex: 1,
      marginRight: 8
    },
    button__text__wallpaper: {
      textAlign: "left"
    },
    button: {
      borderRadius: 4,
      flex: 1,
      marginLeft: 8
    },
    text__column: {
      marginHorizontal: 8,
      marginVertical: 8,
      padding: 16,
      borderRadius: 4,
      backgroundColor: theme.color.background.black15
    },
    text__column__description: {
      alignItems: "flex-end"
    },
    text__column__text: {
      ...theme.text.header2,
      textAlign: "left",
      paddingBottom: 4,
      color: theme.color.text.gray
    },
    text__column__move: {
      ...theme.text.body,
      color: theme.color.text.blue
    },
    text__column__num: {
      ...theme.text.body,
      color: theme.color.text.gray
    }
  });
