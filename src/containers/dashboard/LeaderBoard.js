import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { AntDesign, FontAwesome } from "react-native-vector-icons";
import { useTheme } from "../../context/ThemeContext/ThemeContext";
import { useCreateStyle } from "../../context/ThemeContext/useCreateStyle";

const LeaderBoard = props => {
  const { state } = useTheme();
  const styles = useCreateStyle(getStyles);
  return (
    <View style={styles.root}>
      <View style={styles.your__score}>
        <FontAwesome
          name="flag"
          size={80}
          color={state.color.background.pink}
        />
        <View style={styles.center}>
          <Text style={styles.your__score__text}>Your Best Score</Text>
          <Text style={styles.your__score__grade}>N/A</Text>
        </View>

        <FontAwesome
          name="flag"
          size={80}
          color={state.color.background.pink}
        />
      </View>

      <Button
        text="CONTINUE"
        icon={
          <AntDesign
            name="playcircleo"
            size={30}
            color={state.color.text.gray}
          />
        }
        style={styles.button}
        styleText={styles.text__button}
      />
      <Button
        text="CONTINUE"
        icon={
          <AntDesign name="reload1" size={30} color={state.color.text.gray} />
        }
        style={styles.button}
        styleText={styles.text__button}
      />
      <Button
        text="CONTINUE"
        icon={
          <AntDesign name="Trophy" size={30} color={state.color.text.gray} />
        }
        style={styles.button}
        styleText={styles.text__button}
      />
    </View>
  );
};
export default LeaderBoard;

const getStyles = theme =>
  StyleSheet.create({
    root: {
      flex: 1,
      alignItems: "center"
    },
    your__score: {
      paddingTop: 32,
      paddingBottom: 32,
      flexDirection: "row",
      alignItems: "center"
    },
    your__score__text: {
      color: theme.color.text.blue,
      paddingBottom: 12,
      ...theme.text.header2Bold
    },
    your__score__grade: {
      color: theme.color.text.blue,

      ...theme.text.header1Bold
    },
    center: {
      paddingHorizontal: 12,
      alignItems: "center"
    },
    button: {
      backgroundColor: theme.color.background.blueLight,
      width: "60%",
      marginTop: 12
    },
    text__button: {
      color: theme.color.text.blue,
      ...theme.text.header2Medium
    }
  });
