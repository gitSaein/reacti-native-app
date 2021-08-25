import React, {forwardRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';

const customInput = forwardRef((props, ref) => {
  return <TextInput ref={ref} {...props} editable style={styles.input1} />;
});

const styles = StyleSheet.create({
  input1: {
    margin: 10,
    borderColor: '#BDD1E3',
    width: 60,
    textAlign: 'center',
  },
});

export default customInput;
