import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const buttonAdd = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={require('../../assets/images/icon/Add.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 23,
    width: 23,
  },
});
export default buttonAdd;
