import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const inputPassword = props => {
  return (
    <TextInput
      secureTextEntry={true}
      placeholder={props.placeholder}
      style={styles.input1}
      onChange={props.onChange}
      value={props.value}
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
    margin: 5,
  },
});

export default inputPassword;
