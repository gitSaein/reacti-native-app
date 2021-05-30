import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonBigAdd = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 90,
        height: 90,
        margin: 5,
        backgroundColor: '#F7F7FF',
        borderRadius: 14,
      }}>
      <Image
        style={{
          marginVertical: 33,
          marginHorizontal: 33,
        }}
        source={require('../../assets/images/icon/plus.png')}
      />
    </TouchableOpacity>
  );
};

export default buttonBigAdd;
