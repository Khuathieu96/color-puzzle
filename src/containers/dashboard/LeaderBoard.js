import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LeaderBoard = (props) => {
  return (
    <View style={styles.root}>
      <Text>Basic Mode</Text>
    </View>
  );
};
export default LeaderBoard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
