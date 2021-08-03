import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const mediumRactangle = ({onPress, imageUrl}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image style={styles.image} source={imageUrl} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 14,
    margin: 5,
    width: 120,
    height: 120,
  },
});

export default mediumRactangle;
