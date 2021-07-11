import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonWhiteMoreHorizontal = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../assets/images/icon/more_horizontal_icon.png')}
      />
    </TouchableOpacity>
  );
};

export default buttonWhiteMoreHorizontal;
