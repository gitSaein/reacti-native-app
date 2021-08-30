import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const buttonShare = props => {
  return (
    <TouchableOpacity>
      <Ionicons style={{color: '#6F8BA4'}} size={20} name="share-outline" />
    </TouchableOpacity>
  );
};

export default buttonShare;
