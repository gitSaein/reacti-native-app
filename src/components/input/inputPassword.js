import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const inputPassword = ({placeholder}) => {
  return (
    <Input
      placeholder={placeholder}
      secureTextEntry={true}
      containerStyle={styles.input1}
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

export default inputPassword;
