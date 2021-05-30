import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonCamera = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../assets/images/icon/camera.png')} />
    </TouchableOpacity>
  );
};

export default buttonCamera;
