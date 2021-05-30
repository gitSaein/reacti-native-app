import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonClip = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../assets/images/icon/clip.png')} />
    </TouchableOpacity>
  );
};

export default buttonClip;
