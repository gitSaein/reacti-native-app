import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonLeft = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../assets/images/icon/left.png')} />
    </TouchableOpacity>
  );
};

export default buttonLeft;
