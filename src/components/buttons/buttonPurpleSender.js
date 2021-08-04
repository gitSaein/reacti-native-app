import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
const button = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 70,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#DDDCFF',
      }}
      onPress={onPress}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../assets/images/icon/grey_sender.png')} />
      </View>
    </TouchableOpacity>
  );
};

export default button;
