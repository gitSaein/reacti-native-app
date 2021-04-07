import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const smallPhoneNumInput = ({placeholder, autoCompleteType}) => {
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
    width: 212,
    height: 50,
    shadowRadius: 14,
    shadowColor: '#DCDBFF',
  },
});

export default smallPhoneNumInput;
