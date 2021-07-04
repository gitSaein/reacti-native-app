import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';

const buttonShare = props => {
  return (
    <TouchableOpacity style={{marginLeft: 5}}>
      <Image source={require('../../assets/images/icon/share_arrow.png')} />
    </TouchableOpacity>
  );
};

export default buttonShare;
