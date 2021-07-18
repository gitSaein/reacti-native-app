import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';

const headerSearchInputWhite = props => {
  return (
    <Input
      placeholder={props.placeholder}
      rightIcon={
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/icon/searchGray.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      }
      inputContainerStyle={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 298,
    height: 40,
    borderColor: '#fff',
    marginHorizontal: 5,
  },
  image: {marginRight: 10, marginTop: 4},
});

export default headerSearchInputWhite;
