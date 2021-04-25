import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonComment = props => {
  return (
    <TouchableOpacity style={{marginLeft: 10}}>
      <Image source={require('../../assets/images/icon/comment.png')} />
    </TouchableOpacity>
  );
};

export default buttonComment;
