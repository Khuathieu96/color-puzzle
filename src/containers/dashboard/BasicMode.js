import React from 'react';
import { View, ScrollView, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BoardGame from '../../components/BoardGame';

const BasicMode = () => {
  const navigation = useNavigation();
  return <BoardGame />;
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
