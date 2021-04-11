import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

const buttonNoLine = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 16.71,
    letterSpacing: 0.67,
    fontWeight: '400',
    color: '#504DE5',
  },
});

export default buttonNoLine;
