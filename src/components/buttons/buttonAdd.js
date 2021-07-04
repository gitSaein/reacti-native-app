import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const buttonAdd = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.image}
        source={require('../../assets/images/icon/Add.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
    marginRight: 20,
  },
  image: {
    height: 32,
    width: 32,
  },
});
export default buttonAdd;
