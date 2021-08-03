import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const smallMediumRactangle = ({onPress, imageUrl}) => {
  return <Image style={styles.image} source={imageUrl} />;
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 90,
    height: 90,
  },
});

export default smallMediumRactangle;
