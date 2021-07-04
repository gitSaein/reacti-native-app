import React from 'react';
import {Image} from 'react-native';

const smallCircleAvatar = () => {
  return (
    <Image
      style={{
        borderColor: '#504DE5',
        height: 27,
        width: 27,
        borderWidth: 2,
        borderRadius: 27 / 2,
        position: 'absolute',
      }}
      source={require('../../assets/images/temp/small_avatar.png')}
    />
  );
};

export default smallCircleAvatar;
