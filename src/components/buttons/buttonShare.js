import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonShare = props => {
  return (
    <TouchableOpacity>
      <Image source={require('../../assets/images/icon/share.png')} />
    </TouchableOpacity>
  );
};

export default buttonShare;
