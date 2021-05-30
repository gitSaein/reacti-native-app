import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const buttonAddPerson = () => {
  return (
    <TouchableOpacity>
      <Image source={require('../../assets/images/icon/add_person.png')} />
    </TouchableOpacity>
  );
};

export default buttonAddPerson;
