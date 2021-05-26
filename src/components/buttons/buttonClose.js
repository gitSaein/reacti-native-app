import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonClose = ({onClose}) => {
  return (
    <TouchableOpacity onPress={onClose}>
      <Image source={require('../../assets/images/icon/close.png')} />
    </TouchableOpacity>
  );
};

export default buttonClose;
