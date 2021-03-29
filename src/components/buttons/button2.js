import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const button2 = ({text, onDone}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onDone}>
      <Text style={styles.button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#504DE5',
    borderWidth: 1,
    height: 50,
    width: 162,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  button_text: {
    position: 'absolute',
    height: 14,
    top: 18,

    fontFamily: 'SF Pro Text',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    letterSpacing: 1,

    color: '#504DE5',
  },
});
export default button2;
