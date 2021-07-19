import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonSetting = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../assets/images/icon/setting.png')} />
    </TouchableOpacity>
  );
};

export default buttonSetting;
