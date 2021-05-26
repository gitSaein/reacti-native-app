import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const buttonNext = ({onNext}) => {
  return (
    <TouchableOpacity onPress={onNext}>
      <Text style={styles.text}>Next</Text>
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

export default buttonNext;
