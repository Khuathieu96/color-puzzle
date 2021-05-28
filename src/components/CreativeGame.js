import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useCreateStyle } from "../context/ThemeContext/useCreateStyle";
import { AntDesign } from "react-native-vector-icons";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext/ThemeContext";

const CreativeGame = ({ title, steps }) => {
  const styles = useCreateStyle(getStyles);
  const { state } = useTheme();

  return (
    <View style={styles.text__column}>
      <Text style={styles.text__column__text}>{title}</Text>
      <View style={styles.action}>
        <Image style={styles.image} source={""}></Image>

        <View style={styles.button__row}>
          <Button
            style={styles.button__set__wallpaper}
            styleText={styles.button__text}
            icon={
              <AntDesign
                name="delete"
                size={30}
                color={state.color.text.gray}
              />
            }
            text="DEL"
          />
          <Button
            style={styles.button__set__wallpaper}
            styleText={styles.button__text}
            icon={
              <AntDesign name="edit" size={30} color={state.color.text.gray} />
            }
            text="EDIT"
          />
          <Button
            style={styles.button__set__wallpaper}
            styleText={styles.button__text}
            icon={
              <AntDesign
                name="playcircleo"
                size={30}
                color={state.color.text.blue}
              />
            }
            text="PLAY"
          />
        </View>
      </View>
    </View>
  );
};

export default CreativeGame;

const getStyles = theme =>
  StyleSheet.create({
    button__row: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    image: {
      flex: 1,
      borderRadius: 4,
      height: "100%",
      backgroundColor: theme.color.background.gray
    },
    button__text: {
      paddingLeft: 0,
      flex: 0
    },
    image__row: {
      marginTop: 16,
      marginBottom: 32,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    button__set__wallpaper: {
      // justifyContent: "center",
      // alignItems: "center",
      paddingHorizontal: 0,
      margin: 0,
      borderRadius: 4,
      width: "30%",
      flexDirection: "column",
      backgroundColor: "transparent"
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
    action: {
      flexDirection: "row"
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
