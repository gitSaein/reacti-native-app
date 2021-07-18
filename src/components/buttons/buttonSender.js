import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const buttonSender = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={require('../../assets/images/icon/sender.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 17,
    width: 17,
  },
});
export default buttonSender;
