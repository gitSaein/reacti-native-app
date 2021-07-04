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
              color: '#504DE5',
            }}
            iconRight
            onPress={() => onPress(item.value)}
            titleStyle={{color: '#504DE5'}}
            containerStyle={{
              borderColor: '#504DE5',
              borderWidth: 0.7,
              borderRadius: 20,
            }}
          />
        );
      })}
    </View>
  );
};

export default chipsWithClose;
