import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const buttonBookmark = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons style={{color: '#6F8BA4'}} size={20} name="bookmark-outline" />
    </TouchableOpacity>
  );
};

export default buttonBookmark;
