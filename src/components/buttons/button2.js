import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
const button2 = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 87,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#504DE5',
        alignContent: 'center',
      }}
      onPress={onPress}>
      <Text
        style={{
          padding: 5,
          fontWeight: '700',
          fontFamily: 'SF Pro Text',
          fontSize: 12,
          alignSelf: 'center',
          color: '#FFFFFF',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default button2;
