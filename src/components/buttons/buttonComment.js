import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const buttonComment = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        style={{color: '#6F8BA4'}}
        size={20}
        name={'chatbubble-outline'}
      />
    </TouchableOpacity>
  );
};

export default buttonComment;
