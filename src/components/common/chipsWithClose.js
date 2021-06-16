import React from 'react';
import {View} from 'react-native';
import {Chip} from 'react-native-elements';

const chipsWithClose = ({items, onPress}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {items.map((item, index) => {
        return (
          <Chip
            key={index}
            title={item.label}
            icon={{
              name: 'close',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
            iconRight
            onPress={() => onPress(item.value)}
          />
        );
      })}
    </View>
  );
};

export default chipsWithClose;
