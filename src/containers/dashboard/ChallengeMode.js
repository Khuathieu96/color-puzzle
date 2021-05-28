import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import ChallengeGame from "../../components/ChallengeGame";

const challengeData = [
  { id: "1", title: "Challenge 1" },
  { id: "2", title: "Challenge 2" },
  { id: "3", title: "Challenge 3" }
];

const ChallengeMode = props => {
  return (
    <View style={styles.root}>
      <FlatList
        data={challengeData}
        renderItem={({ item }) => <ChallengeGame {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default ChallengeMode;

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
