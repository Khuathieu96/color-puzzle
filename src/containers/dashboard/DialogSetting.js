import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BasicMode = (props) => {
  return (
    <View style={styles.root}>
      <Text>Basic Mode</Text>
    </View>
  );
};
export default BasicMode;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
