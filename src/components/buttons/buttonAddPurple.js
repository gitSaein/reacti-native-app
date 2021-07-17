import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const buttonAddPurple = ({onPress}) => {
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
    height: 32,
    width: 32,
  },
});
export default buttonAddPurple;
