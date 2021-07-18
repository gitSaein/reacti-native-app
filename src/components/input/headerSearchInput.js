import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';

const headerSearchInput = props => {
  return (
    <Input
      placeholder={'    Search'}
      placeholderTextColor={'#FFFFFF'}
      rightIcon={
        <TouchableOpacity>
          <Image source={require('../../assets/images/icon/Search.png')} />
        </TouchableOpacity>
      }
      textAlign={'left'}
      inputContainerStyle={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#4946DA',
    borderRadius: 16,
    width: '100%',
    height: 40,
    borderColor: '#4946DA',
  },
});

export default headerSearchInput;
