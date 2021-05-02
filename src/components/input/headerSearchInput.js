import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Input} from 'react-native-elements';

const headerSearchInput = props => {
  return (
    <Input
      placeholder={props.placeholder}
      placeholderTextColor={'#FFFFFF'}
      rightIcon={
        <Image
          source={require('../../assets/images/icon/Search.png')}
          style={styles.image}
        />
      }
      inputContainerStyle={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#4946DA',
    borderRadius: 16,
    width: 260,
    height: 40,
    borderColor: '#4946DA',
    marginTop: 24,
    marginHorizontal: 5,
  },
  image: {marginRight: 10, marginTop: 4},
});

export default headerSearchInput;
