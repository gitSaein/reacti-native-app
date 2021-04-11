import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const customInput = props => {
  return (
    <TextInput
      {...props}
      editable
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      style={styles.input1}
      onEndEditing={props.onEndEditing}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  input1: {
    margin: 10,
    borderColor: '#BDD1E3',
    width: 60,
    textAlign: 'center',
  },
});

export default customInput;
