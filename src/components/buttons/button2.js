import React from 'react';
import {Button} from 'react-native-elements';

const button2 = ({title, onPress}) => {
  return <Button type="clear" title={title} onPress={onPress} />;
};

export default button2;
