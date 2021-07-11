import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonWhiteLeft = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../assets/images/icon/white_left.png')} />
    </TouchableOpacity>
  );
};

export default buttonWhiteLeft;
