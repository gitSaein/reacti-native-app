import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const button = ({onNext, text}) => {
  return (
    <TouchableOpacity onPress={onNext}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontWeight: 'bold',
    fontSize: 12,
    textAlignVertical: 'top',
    color: '#504DE5',
  },
});

export default button;
