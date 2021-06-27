import React from 'react';
import {View} from 'react-native';
import {Chip} from 'react-native-elements';

const chips = ({items}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {items.map((item, index) => {
        return <Chip key={index} title={item.label} type="outline" />;
      })}
    </View>
  );
};

export default chips;
