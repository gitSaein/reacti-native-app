import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const button1 = ({text, onDone}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onDone}>
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
  },
  button_text: {
    position: 'absolute',
    height: 14,
    left: '44%',
    top: 18,

    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    letterSpacing: 1,

    color: '#FFFFFF',
  },
});
export default button1;
