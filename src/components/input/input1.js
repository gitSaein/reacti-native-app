import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const input1 = ({placeholder, autoCompleteType}) => {
  return (
    <TextInput
      placeholder={placeholder}
      autoCompleteType={autoCompleteType}
      style={styles.input1}
    />
  );
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

export default input1;
