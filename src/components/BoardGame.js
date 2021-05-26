import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import { dataBoardGame } from "../utils/data";

import CardGame from "./CardGame";

const BoardGame = () => {
  return (
    <View>
      <FlatList
        data={dataBoardGame}
        columnWrapperStyle={styles.flat}
        numColumns={5}
        renderItem={({ item }) => <CardGame {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default BoardGame;

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  flat: {
    flex: 1,
    justifyContent: "center"
  }
});
