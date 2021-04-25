import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonLike = props => {
  return (
    <TouchableOpacity>
      <Image source={require('../../assets/images/icon/like.png')} />
    </TouchableOpacity>
  );
};

export default buttonLike;
