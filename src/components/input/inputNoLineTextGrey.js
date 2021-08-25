import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const inputNoLineTextGrey = ({
  text,
  value,
  onChangeText,
  keyboardType,
  editable,
}) => {
  return (
    <TextInput
      editable={editable === undefined ? true : editable}
      keyboardType={keyboardType}
      style={styles.input}
      placeholder={text}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    padding: 10,
    fontSize: 14,
    lineHeight: 16.71,
    color: '#6F8BA4',
  },
});

export default inputNoLineTextGrey;
