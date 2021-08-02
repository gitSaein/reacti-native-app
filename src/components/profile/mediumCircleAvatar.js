import React from 'react';
import {Image} from 'react-native';

const mediumCircleAvatar = () => {
  return (
    <Image
      style={{
        borderColor: '#504DE5',
        height: 46,
        width: 46,
        borderWidth: 2,
        borderRadius: 46 / 2,
        position: 'absolute',
      }}
      source={require('../../assets/images/temp/small_avatar.png')}
    />
  );
};

export default mediumCircleAvatar;
