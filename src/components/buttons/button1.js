import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const button1 = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#504DE5',
    height: 50,
    width: 347,
    borderRadius: 25,
    marginTop: 20,
  },
  button_text: {
    position: 'absolute',
    height: 14,
    marginTop: 16,
    alignSelf: 'center',

    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,

    color: '#FFFFFF',
  },
});
export default button1;
