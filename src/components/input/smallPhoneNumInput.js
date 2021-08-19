import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const smallPhoneNumInput = ({
  placeholder,
  keyboardType,
  onChangeText,
  value,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={styles.boxWithShadow}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  boxWithShadow: {
    width: 190,
    height: 60,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    borderRadius: 14,
    elevation: 5,
  },
});

export default smallPhoneNumInput;
