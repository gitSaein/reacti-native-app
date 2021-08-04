import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
const button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 250,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#504DE5',
        alignContent: 'center',
      }}
      onPress={onPress}>
      <Text
        style={{
          padding: 10,
          fontWeight: '700',
          fontFamily: 'SF Pro Text',
          fontSize: 12,
          lineHeight: 14.32,
          letterSpacing: 1,
          alignSelf: 'center',
          color: '#FFFFFF',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default button;
