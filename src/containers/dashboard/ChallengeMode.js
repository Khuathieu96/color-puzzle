import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChallengeMode = (props) => {
  return (
    <View style={styles.root}>
      <Text>Challenge Mode</Text>
    </View>
  );
};
export default ChallengeMode;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
