import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";

import CardGame from "./CardGame";

const BoardGame = () => {
  return (
    <View>
      <FlatList
        // viewStyle={styles.root}
        data={[
          { id: "123", stage: 1 },
          { id: "124", stage: 2 },
          { id: "125", stage: 3 },
          { id: "126", stage: 4 },
          { id: "127", stage: 5 }
        ]}
        renderItem={({ item }) => <CardGame {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default BoardGame;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke"
  }
});
