import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const noLineInput = props => {
  return (
    <Input
      placeholder={'Type a Message'}
      placeholderTextColor={'#F2F2F2'}
      textAlign={'left'}
      inputContainerStyle={styles.container}
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
