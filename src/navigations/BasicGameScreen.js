import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable
} from "react-native";
import CardColor from "../components/CardColor";
import { useCreateStyle } from "../context/ThemeContext/useCreateStyle";
import { AntDesign } from "react-native-vector-icons";
import { useTheme } from "../context/ThemeContext/ThemeContext";
import { useNavigation } from "@react-navigation/core";
import { dataColor } from "../utils/data";
import TextColumn from "../components/TextColumn";

const BasicGameScreen = ({ route }) => {
  const { stage } = route.params;
  const { state } = useTheme();
  const styles = useCreateStyle(getStyles);
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={state.color.text.gray} />
        </Pressable>

        <View style={styles.column__left}>
          <TextColumn text="LEVEL" num={6} />
          <TextColumn text="MOVES" num={6} />
          <TextColumn
            text="SHARE"
            iconName="bulb1"
            color={state.color.text.gray}
          />
          <TextColumn
            text="HINTS"
            iconName="sharealt"
            color={state.color.text.gray}
          />
        </View>
      </View>
      <SafeAreaView style={styles.board__game}>
        <FlatList
          data={dataColor}
          numColumns={7}
          renderItem={({ item }) => <CardColor {...item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};
export default BasicGameScreen;

const getStyles = theme =>
  StyleSheet.create({
    header: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 24
    },

    root: {
      flex: 1,
      paddingBottom: 24,
      backgroundColor: theme.color.background.yellow
    },
    board__game: {
      flex: 1,
      height: "100%"
    },
    column__left: {
      flexDirection: "row"
    }
  });
