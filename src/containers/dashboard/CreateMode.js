import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CreativeGame from "../../components/CreativeGame";
import { AntDesign } from "react-native-vector-icons";
import Button from "../../components/Button";
import { useCreateStyle } from "../../context/ThemeContext/useCreateStyle";
import { useTheme } from "../../context/ThemeContext/ThemeContext";

const createData = [
  { id: "1", title: "game 1" },
  { id: "2", title: "game 2" }
];

const CreateMode = props => {
  const styles = useCreateStyle(getStyles);
  const { state } = useTheme();
  return (
    <View style={styles.root}>
      <Button
        icon={<AntDesign name="plus" size={20} color={state.color.text.red} />}
        text="CREATE NEW PUZZLE"
        style={styles.button}
        styleText={styles.text__button}
      />
      <FlatList
        data={createData}
        renderItem={({ item }) => <CreativeGame {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default CreateMode;

const getStyles = theme =>
  StyleSheet.create({
    root: {
      flex: 1
    },
    text__button: {
      color: theme.color.text.red
    },
    button: {
      marginBottom: 16,
      width: "70%",
      borderColor: theme.color.text.red,
      borderWidth: 1,
      borderRadius: 4,
      alignSelf: "center"
    }
  });
