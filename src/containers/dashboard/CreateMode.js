import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CreateMode = (props) => {
  return (
    <View style={styles.root}>
      <Text>create Mode</Text>
    </View>
  );
};
export default CreateMode;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
