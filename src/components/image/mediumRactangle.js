import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';

const mediumRactangle = ({imageUrl, component}) => {
  return (
    <ImageBackground
      style={styles.image}
      imageStyle={{borderRadius: 14, borderColor: '#D8D8D8', borderWidth: 1}}
      resizeMode="cover"
      source={imageUrl}>
      <View style={styles.text}>{component}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 5,
    width: 90,
    height: 120,
  },
  text: {
    padding: 3,
    marginTop: '85%',
    alignItems: 'center',
  },
});

export default mediumRactangle;
