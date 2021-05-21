import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameScreen = ({ route }) => {
  const { stage } = route.params;
  return (
    <View style={styles.root}>
      <Text>Game Screen: {stage}</Text>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
