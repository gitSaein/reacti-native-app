import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const noLineInput = props => {
  const {value, onChangeText} = props;
  return (
    <Input
      placeholder={'Type a Message'}
      placeholderTextColor={'#F2F2F2'}
      textAlign={'left'}
      inputContainerStyle={styles.container}
      value={value}
      onChangeText={event => {
        onChangeText(event);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    borderColor: '#ffffff',
  },
});

export default noLineInput;
