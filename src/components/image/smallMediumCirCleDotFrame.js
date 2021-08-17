import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const smallMediumRactangle = ({imageUrl}) => {
  return (
    <View style={styles.profile}>
      <Image style={styles.image} source={imageUrl} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    width: 90,
    height: 90,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderColor: '#504DE5',
    borderWidth: 2,
    borderRadius: 50,
    padding: 40,
    width: 95,
    height: 95,
  },
});

export default smallMediumRactangle;
