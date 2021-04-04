import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const inputPassword = ({placeholder}) => {
  return <TextInput placeholder={placeholder} style={styles.input1} />;
};

const styles = StyleSheet.create({
  input1: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: 347,
    height: 50,
    borderColor: '#DCDBFF',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default inputPassword;
