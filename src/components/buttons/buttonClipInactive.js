import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

const buttonClipInactive = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.image}
        source={require('../../assets/images/icon/clip_inactive.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 17.43,
    width: 16.44,
  },
});
export default buttonClipInactive;
